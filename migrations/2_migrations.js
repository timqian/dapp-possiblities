var SimpleStorage = artifacts.require("SimpleStorage");
var PetAdoption = artifacts.require("PetAdoption");
var SimpleCoin = artifacts.require("SimpleCoin");
var SimpleBank = artifacts.require("SimpleBank");
var CrowdFund = artifacts.require("CrowdFund");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(PetAdoption);
  deployer.deploy(SimpleCoin);
  deployer.deploy(SimpleBank);
  // deploy with params, ref: https://ethereum.stackexchange.com/a/30766/41578
  deployer.deploy(CrowdFund, 24, 'timqian.com', web3.eth.accounts[0], 10000000000000000000); // 10 eth
};
