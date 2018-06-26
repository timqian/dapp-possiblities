// Declare the source file compiler version
// instructions for the compiler about how to treat the source code;
// up to, but not including, version 0.5.0
pragma solidity ^0.4.0;

/* 'contract' has similarities to 'class' in other languages (class variables,
inheritance, etc.) */
contract SimpleStorage {

    // Declare state variables outside function, persist through life of contract
    // unsigned integer of 256 bits a single slot in a database
    // can be queried and altered by the owning contract
    uint storedData; 

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}