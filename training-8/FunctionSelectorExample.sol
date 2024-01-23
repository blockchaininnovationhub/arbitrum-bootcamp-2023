// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract Math {
    function add(uint256 a, uint256 b) public pure returns(uint256) {
        return a+b;
    }
}

contract FunctionSelectorExample {

    function getFuncSelector() public pure returns(bytes4) {
        bytes32 a = keccak256("add(uint256,uint256)");
        return bytes4(a);
    }

    function callFunction(address SA, string memory funcSelector, uint256 a, uint256 b) public  returns(bytes memory) {
        (bool success, bytes memory returndata) = SA.call(abi.encodeWithSignature(funcSelector, a, b));

        return returndata;
    }

     function callFunction(address SA, bytes4 funcSelector, uint256 a, uint256 b) public  returns(bytes memory) {
        (bool success, bytes memory returndata) = SA.call(abi.encodeWithSelector(funcSelector, a, b));

        return returndata;
    }
    
}
