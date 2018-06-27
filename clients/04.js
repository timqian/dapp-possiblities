var SimpleBank = artifacts.require("SimpleBank");

module.exports = async function (callback) {
    try {
        const instance = await SimpleBank.deployed();
        console.log('bank owner', await instance.owner());

        // define user address, ref: https://ethereum.stackexchange.com/a/19284/41578
        const client = web3.eth.accounts[1];
        console.log('client', client);

        // define deposit value, ref: https://ethereum.stackexchange.com/a/41416/41578
        const result = await instance.deposit({from: client, value: 1000000000000000000});
        console.log('deposite value:', result.logs[0].args.amount);

        await instance.withdraw(500000000000000000, {from: client});
        const ethInBank = await instance.balance.call({from: client});
        console.log('ethInBank:', ethInBank);
    } catch (error) {
        console.log(error);
    }
}
