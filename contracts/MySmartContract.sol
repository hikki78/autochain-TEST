pragma solidity ^0.8.2;

contract MySmartContract {
    uint public value;

    event ValueSet(uint newValue);

    function setValue(uint _value) public {
        value = _value;
        emit ValueSet(_value);
    }

    function getValue() public view returns (uint) {
        return value;
    }
}