// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract DonationV2 {
    uint256 public progress;

    function donate() public payable {
        require(msg.value > 1 ether, "too low");
        progress += msg.value;
    }
}
