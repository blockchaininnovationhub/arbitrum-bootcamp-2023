// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MappingExample {
    // Declare a mapping with an address key and a uint value
    mapping(address => uint256) public balances;

    // Function to update the balance for a given address
    function updateBalance(address _account, uint256 _newBalance) public {
        // Update the balance in the mapping
        balances[_account] = _newBalance;
    }

    // Function to get the balance for a given address
    function getBalance(address _account) public view returns (uint256) {
        // Retrieve the balance from the mapping
        return balances[_account];
    }
}

