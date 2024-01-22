// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PiggyBank {
    address public owner;
    uint public withdrawalLimit = 10 ether;
    uint public balance;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _; // Continue with the function execution if the modifier check passes
    }

    modifier checkLimit(uint amount) {
        require(amount <= withdrawalLimit, "Withdrawal amount exceeds the limit");
        _; // Continue with the function execution if the modifier check passes
    }

    constructor() {
        owner = msg.sender;
    }

    function deposit() public payable {
        balance += msg.value;
    }

    function withdraw(uint amount) public onlyOwner checkLimit(amount) {
        balance -= amount;
        payable(owner).transfer(amount);
    }
}
