// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


// Abstract interface defining a simple token
interface Token {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

// Contract using the Token interface
contract TokenHolder {
    Token public token;

    constructor(Token _token) {
        token = _token;
    }

    function transferTokens(address recipient, uint256 amount) public {
        require(token.transfer(recipient, amount), "Token transfer failed");
    }

    function getBalance() public view returns (uint256) {
        return token.balanceOf(address(this));
    }
}
