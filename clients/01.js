var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async function (callback) {
    const instance = await SimpleStorage.deployed();
    await instance.set(6);
    console.log(await instance.get());
    await instance.set(8);
    console.log(await instance.get());
}
  