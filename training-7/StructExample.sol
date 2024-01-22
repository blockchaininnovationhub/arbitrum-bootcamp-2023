// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract StructExample {
    struct Person {
        string name;
        uint8 age;
    }

    Person person;


    function setPerson(string memory name, uint8 age) public {
        person.name = name;
        person.age = age;
    }

    function getPerson() public view returns (Person memory) {
        return person;
    }
}
