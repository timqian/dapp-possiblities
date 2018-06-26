var SimpleCoin = artifacts.require("SimpleCoin");

module.exports = async function (callback) {
    const instance = await SimpleCoin.deployed();
    const result = await instance.sendCoin(web3.eth.accounts[1], 500);

    // console.log('Transaction hash', result.tx);
    // console.log('Transaction receipt', result.receipt);
    // console.log('Decoded Transaction events', result.logs);

    const balance0 = await instance.getBalance.call(web3.eth.accounts[0]);
    const balance1 = await instance.getBalance.call(web3.eth.accounts[1]);
    
    console.log(web3.eth.accounts[0], 'balance: ', balance0.toNumber());
    console.log(web3.eth.accounts[1], 'balance: ', balance1.toNumber());
}
