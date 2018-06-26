var SimpleStorage = artifacts.require("SimpleStorage");
var Adoption = artifacts.require("Adoption");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Adoption);
};
