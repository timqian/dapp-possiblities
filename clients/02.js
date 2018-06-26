var PetAdoption = artifacts.require("PetAdoption");

module.exports = async function (callback) {
    const instance = await PetAdoption.deployed();
    // call did not cost gas
    const adopters = await instance.getAdopters.call();
    console.log('adopters', adopters);
    await instance.adopt(3);
    console.log('adopters', await instance.getAdopters.call());
}
