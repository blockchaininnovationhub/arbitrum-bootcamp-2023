// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract DecentralizedVoting {
    address public owner;
    mapping(address => bool) public hasVoted;
    mapping(string => uint256) public votesCount;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can execute this");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function vote(string memory candidate) public {
        // Ensure that the voter has not voted before
        require(!hasVoted[msg.sender], "You have already voted.");

        // Check if the candidate is valid
        require(bytes(candidate).length > 0, "Invalid candidate name.");

        // Increment the vote count for the selected candidate
        votesCount[candidate]++;

        // Mark the voter as having voted
        hasVoted[msg.sender] = true;

      
    }

    function getResult(string memory candidate) public view returns (uint256) {
        // Check if the candidate is valid
        require(bytes(candidate).length > 0, "Invalid candidate name.");

        // Return the vote count for the selected candidate
        return votesCount[candidate];
    }

   
}
