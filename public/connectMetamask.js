window.addEventListener('load', async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            const accounts = await web3.eth.getAccounts();
            console.log('Connected accounts:', accounts);
        } catch(error) {
            console.error("User rejected connection:", error);
        }
    } else {
        console.log('Metamask not installed');
    }
});
