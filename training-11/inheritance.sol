// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


// Parent contract
contract Animal {
    string public name;

    constructor(string memory _name) {
        name = _name;
    }

    function makeSound() public virtual returns (string memory) {
        return "Some generic sound";
    }
}

// Derived contract inheriting from Animal
contract Dog is Animal {
    constructor(string memory _name) Animal(_name) {
        // The Animal constructor is called with the provided name
    }

    function makeSound() public override returns (string memory) {
        return "Woof!";
    }
}
