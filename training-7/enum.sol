// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EnumExample {
    // Define an enum named State with three possible values
    enum State {
        Pending,
        Approved,
        Rejected
    }

    // Declare a state variable of type State
    State public currentState;

    // Function to set the state
    function setState(State _state) public {
        currentState = _state;
    }

    // Function to check if the current state is Approved
    function isApproved() public view returns (bool) {
        return currentState == State.Approved;
    }
}
