// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract MyStorage {

    uint256 num;
    uint256 age;

    constructor(uint256 _num) {
        num = _num;
    }


    function set(uint256 _num, uint256 _age) public payable {
        num = _num;
        age=_age;
    }

    /**
     * @dev Return value 
     * @return value of 'number'
     */
    function getNum() public view returns (uint256){
        return num;
    }

    function getAge() public view returns (uint256){
        return age;
    }
}