// Contract example
contract Bank {
    uint256 private balance;

    function deposit(uint256 amount) public {
        balance += amount;
    }

    function getBalance() public view returns (uint256) {
        return balance;
    }
}

// Library example
library MathLibrary {
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        return a + b;
    }
}

contract Calculator {
    using MathLibrary for uint256;

    function addNumbers(uint256 x, uint256 y) public pure returns (uint256) {
        return x.add(y);
    }
}
