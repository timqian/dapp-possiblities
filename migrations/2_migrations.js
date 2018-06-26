var SimpleStorage = artifacts.require("SimpleStorage");
var Adoption = artifacts.require("Adoption");
var SimpleCoin = artifacts.require("SimpleCoin");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Adoption);
  deployer.deploy(SimpleCoin);
};
