var SimpleStorage = artifacts.require("SimpleStorage");
var Adoption = artifacts.require("Adoption");
var SimpleCoin = artifacts.require("SimpleCoin");
var SimpleBank = artifacts.require("SimpleBank");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Adoption);
  deployer.deploy(SimpleCoin);
  deployer.deploy(SimpleBank);
};
