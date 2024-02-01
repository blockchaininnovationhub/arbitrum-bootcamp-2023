// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract DonationV1 {
    uint256 public progress;

    function donate() public payable {
        progress += msg.value;
    }
}
