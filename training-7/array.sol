// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FixedArrayExample {
    // Declare a fixed-size array with 3 elements of type uint
    uint[3] public fixedArray;

    // Constructor to initialize the fixed-size array
    constructor() {
        fixedArray = [1, 2, 3];
    }

    // Function to get the value at a specific index in the fixed-size array
    function getValueAtIndex(uint index) public view returns (uint) {
        require(index < fixedArray.length, "Index out of bounds");
        return fixedArray[index];
    }
}


// Dynamic array


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DynamicArrayExample {
    // Declare a dynamic-size array of type uint
    uint[] public dynamicArray;

    // Function to add a value to the dynamic-size array
    function addValue(uint value) public {
        dynamicArray.push(value);
    }

    // Function to get the length of the dynamic-size array
    function getArrayLength() public view returns (uint) {
        return dynamicArray.length;
    }
}
