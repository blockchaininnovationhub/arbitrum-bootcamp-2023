// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Crowdfunding {
    address public projectOwner;
    uint256 public fundingGoal;
    uint256 public totalFunds;
    bool public fundingGoalReached;
    mapping(address => uint256) public contributions;

    event FundReceived(address indexed contributor, uint256 amount);
    event FundingGoalReached(uint256 totalFunds);

    modifier onlyOwner() {
        require(msg.sender == projectOwner, "Only the project owner can execute this");
        _;
    }

    modifier goalNotReached() {
        require(!fundingGoalReached, "Funding goal already reached");
        _;
    }

    constructor(uint256 _goal) {
        projectOwner = msg.sender;
        fundingGoal = _goal;
        totalFunds = 0;
        fundingGoalReached = false;
    }

    receive() external payable {
        contribute();
    }

    function contribute() public payable goalNotReached {
        require(msg.value > 0, "Contribution amount must be greater than 0");

        // Update contributor's balance
        contributions[msg.sender] += msg.value;

        // Update total funds
        totalFunds += msg.value;

        // Emit a FundReceived event
        emit FundReceived(msg.sender, msg.value);

        // Check if the funding goal is reached
        if (totalFunds >= fundingGoal) {
            fundingGoalReached = true;
            emit FundingGoalReached(totalFunds);
        }
    }

    function withdrawFunds() public onlyOwner goalNotReached {
        // Ensure that the funding goal is not reached
        // Allow the project owner to withdraw funds before reaching the goal
        require(totalFunds > 0, "No funds available for withdrawal");

        // Transfer the funds to the project owner
        payable(projectOwner).transfer(totalFunds);

        // Reset total funds and mark goal as reached
        totalFunds = 0;
        fundingGoalReached = true;
    }
}
