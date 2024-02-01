// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract Donation {
    uint256 public progress;
    address public implementation;

    function donate() public payable {
       (bool success, bytes memory data) = implementation.delegatecall(abi.encodeWithSignature("donate()"));
    }

    function setImplementation(address implementation_) external {
        implementation=implementation_;
    }
}
