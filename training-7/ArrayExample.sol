// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract ArrayExample {

    uint8 [5] a = [255,0,0,0,1];
    uint8 [] b;

    function addToArray(uint8 d) public {
        b.push(d);
    }

    function getLengthOfArray() public view returns(uint256) {
        return b.length;
    }

    function popArray() public  {
        b.pop();
    }

    function getValueByIndex(uint256 index) public view returns(uint8)  {
        return b[index];
    }

    function deleteArrayByIndex(uint256 index) public {
        delete b[index];
    }


    function getArray() public view returns (uint8 [] memory) {
        return b;
    }

}
