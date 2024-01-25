// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;


// the purpose is to allow anyone, anywhere to donate 1 ether or above.
// the contract is going to stop receiving new donations once we reach our goal
// only the admin can withdraw the fund
// admin can only withdraw if we reached our goal or we reached a deadline

contract CrowdFunding {

    uint256 immutable goal;
    uint256 progress;

    uint256 deadline;

    address owner;

    event Deposited(address indexed depositor, uint256 amount);

    constructor(uint256 goal_, uint256 deadline_) {
        require(deadline_ > block.timestamp, "the timestamp is in the past");
        require(deadline_ < block.timestamp + 30 days, "the timestamp is the above 30 days limit");
        require(goal_ >= 1 ether, "you can not set a goal below 1 ether");

        owner=msg.sender;
        goal=goal_;
        deadline=deadline_;
    }

    function deposit() external payable {
        require(msg.value >= 1 ether, "you must send 1 ether or above");
        progress += msg.value;
        emit Deposited(msg.sender, msg.value);
    }

    function withdraw() external {
        require(msg.sender == owner, "you are not the owner");
        require(progress >= goal || block.timestamp > deadline, "goal reached, thank you!");
        
        uint256 balance = address(this).balance;

        payable(owner).transfer(balance);
    }



}
