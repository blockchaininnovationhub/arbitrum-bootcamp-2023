// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ExplicitConversion {
    uint8 public a = 100;
    uint256 public b;
    int256 public c = -50;

    function convert() public {
        // Explicit conversion from uint8 to uint256
        b = uint256(a);

        // Explicit conversion from int256 to uint256
        uint256 d = uint256(c);
    }
}



// Implicit conversion


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ImplicitConversion {
    uint8 public smallNumber = 42;
    uint256 public largeNumber;

    function convert() public {
        // Implicit conversion from uint8 to uint256
        largeNumber = smallNumber;
    }
}