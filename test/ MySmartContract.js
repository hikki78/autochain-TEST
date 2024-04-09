const assert = require('assert');
const truffleAssert = require('truffle-assertions');
const MySmartContract = artifacts.require("MySmartContract");

contract("MySmartContract", async _accounts => {
  let mySmartContract;

  before(async () => {
    mySmartContract = await MySmartContract.deployed();
  });

  it("should set the value correctly", async () => {
    await mySmartContract.setValue(5);
    const value = await mySmartContract.getValue();
    assert.strictEqual(value.toNumber(), 5);
  });

  it("should emit an event when the value is set", async () => {
    await truffleAssert.passes(mySmartContract.setValue(10));
  });
});