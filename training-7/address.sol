
// NonPayable Address

contract NonPayableExample {
    address public recipient;

    function setRecipient(address _recipient) public {
        recipient = _recipient;
    }

    function getBalance() public view returns (uint256) {
        return recipient.balance;
    }
}



// NonPayable Address

contract PayableExample {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function receiveFunds() public payable {
        // This function can receive Ether
    }

    function withdraw() public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
}

