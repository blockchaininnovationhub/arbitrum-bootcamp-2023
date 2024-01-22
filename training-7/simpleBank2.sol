// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract SimpleBank {

    enum Status {
        PENDING,
        ACTIVE,
        INACTIVE
    }

    struct User {
      string name;
      address account;
      Status status;  
    }

    mapping(address => uint256) balances;

    mapping(address => User) users;

    function addUser(string memory name) public  {
        users[msg.sender] = User(name, msg.sender, Status.ACTIVE);
    }

    function getUser(address user) public view returns(User memory) {
        return users[user];
    }


    function activateUser(address user) public {
        users[user].status = Status.ACTIVE;
    }

    function banUser(address user) public {
        users[user].status = Status.INACTIVE;
    }

    function getUserStatus(address user) public view returns(Status) {
        return users[user].status;
    }


    function deposit(address receiver, uint256 amount) public  {
        balances[receiver] += amount;
    }

    function withdraw(uint256 amount) public  {
        balances[msg.sender] -= amount;
    }

    function getBalance(address owner) public view returns(uint256) {
        return balances[owner];
    }

}
