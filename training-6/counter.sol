// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

contract Counter {
    uint256 private count;

    // Constructor initializes the counter to 0
    constructor() {
        count = 0;
    }

    // Function to get the current count
    function getCount() public view returns (uint256) {
        return count;
    }

    // Function to increment the count by 1
    function increment() public {
        count += 1;
    }

    // Function to decrement the count by 1
    function decrement() public {
        require(count > 0, "Count cannot go below zero");
        count -= 1;
    }

    // Function to reset the count to 0
    function reset() public {
        count = 0;
    }
}
