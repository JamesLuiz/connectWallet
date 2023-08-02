window.addEventListener('load', async () => {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
            let accounts = await web3.eth.getAccounts();
            if (accounts.length == 0) { // check if Metamask is connected
                accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }); // connect to Metamask
            }
            console.log('Connected accounts:', accounts);
        } catch(error) {
            console.error("User rejected connection:", error);
        }
    } else {
        console.log('Metamask not installed');
    }
});
