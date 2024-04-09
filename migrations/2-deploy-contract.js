const MySmartContract = artifacts.require("MySmartContract")

module.exports = function(deployer){
  deployer.deploy(MySmartContract);
};