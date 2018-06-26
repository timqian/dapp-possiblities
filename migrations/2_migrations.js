var SimpleStorage = artifacts.require("SimpleStorage");
var PetAdoption = artifacts.require("PetAdoption");
var SimpleCoin = artifacts.require("SimpleCoin");
var SimpleBank = artifacts.require("SimpleBank");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(PetAdoption);
  deployer.deploy(SimpleCoin);
  deployer.deploy(SimpleBank);
};
