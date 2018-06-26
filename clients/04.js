var SimpleBank = artifacts.require("SimpleBank");

module.exports = async function (callback) {
    const instance = await SimpleBank.deployed();

    // https://ethereum.stackexchange.com/a/41416/41578
    const result = await instance.deposit({from: web3.eth.accounts[0], value: 1000000000000000000});
    
    console.log('deposite value:', result.logs[0].args.amount);

    await instance.withdraw(500000000000000000);

    const ethInBank = await instance.balance.call();
    console.log('ethInBank:', ethInBank);
}
