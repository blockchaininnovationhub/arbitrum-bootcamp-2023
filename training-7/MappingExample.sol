// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract MappingExample {

    mapping(address => uint256) balances;


    function deposit(address receiver, uint256 amount) public {
        balances[receiver] +=  amount;
    }

    function withdraw(address owner, uint256 amount) public {
        balances[owner] -=  amount;
    }

    function getBalance(address receiver) public view returns(uint256)  {
        return  balances[receiver];
    }
}
