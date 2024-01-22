// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StructExample {
    // Define a struct named Person
    struct Person {
        string name;
        uint age;
    }

    // Declare a state variable of type Person
    Person public myPerson;

    // Function to set values for the Person struct
    function setPerson(string memory _name, uint _age) public {
        myPerson = Person(_name, _age);
    }

    // Function to get the name of the Person
    function getPersonName() public view returns (string memory) {
        return myPerson.name;
    }
}
