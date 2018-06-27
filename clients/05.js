var CrowdFund = artifacts.require("CrowdFund");

module.exports = async function (callback) {
    try {
        // define user address, ref: https://ethereum.stackexchange.com/a/19284/41578
        const client = web3.eth.accounts[1];
        console.log('client address:', client);

        const instance = await CrowdFund.deployed();
        console.log('CrowdFund creater address:', await instance.creator());

        // only get number, not enum, reason: https://solidity.readthedocs.io/en/latest/frequently-asked-questions.html#if-i-return-an-enum-i-only-get-integer-values-in-web3-js-how-to-get-the-named-values
        console.log('State:', await instance.state());
        console.log('minimumToRaise', await instance.minimumToRaise());

        await instance.contribute({from: client, value: 100000000000000000});
        console.log('totalRaised:', await instance.totalRaised());
        console.log('contributions:', await instance.contributions(0));

    } catch (error) {
        console.log(error);
    }
}
