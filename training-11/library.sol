Skip to content
DEV Community
Search...

Log in
Create account

0
Jump to Comments
1
Save

Cover image for Libraries in Solidity
Shlok Kumar
Shlok Kumar
Posted on Mar 23, 2023


1
Libraries in Solidity
#
solidity
#
ethereum
#
web3
#
blockchain
Solidity libraries contain reusable smart contract code. A library is assigned a specific address and its properties and methods can be reused

Solidity libraries are a way to create reusable code in Solidity, which can be called by other contracts. They enable developers to develop smart contracts in a more modular way and reduce the gas cost by deploying common code only once. Libraries like contracts have to be deployed to be used, which allows you to use libraries for testing purposes as well. A library is defined with the keyword "library" (library C {}) in the same way a contract is defined (contract A {}). Calling a function of a library will use a special instruction (DELEGATECALL), which will cause the calling context to be passed to the library as if it was code running in the contract itself.

One great feature of Solidity Libraries is that they are open source, meaning anyone can use them without having to pay any fees or licensing costs associated with proprietary software solutions. This makes it easier for new users to get started quickly with their projects on the Ethereum platform without having to invest too much upfront capital into development costs or learning how different programming languages work together within a distributed ledger environment like Ethereum’s EVM (Ethereum Virtual Machine). Additionally, because these libraries are open source there is no need for third-party verification which further reduces the risk associated with deploying smart contracts onto public networks such as mainnet or testnets like Ropsten/Kovan/Rinkeby etc.

Finally, one of the most attractive aspects of using Solidity Libraries is that they offer support across multiple platforms including web3js (for interacting directly with nodes via JavaScript), Truffle Suite (for testing & debugging your dApp), Remix IDE (ideal for writing & compiling solidity code during the development phase) and MetaMask wallet integration (to manage transactions inside dApps). All this combined makes it easy for even novice programmers to develop robust applications leveraging existing resources available through various library repositories located online such as GitHub etc. As blockchain technology continues its rapid evolution so will these types of helpful tools allowing us all access to amazing decentralized applications powered by immutable ledgers!

Here's an example of a simple Solidity library that contains a function to calculate the square of an integer:
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library Math {
    function square(uint256 x) public pure returns (uint256) {
        return x * x;
    }
}
This library defines a single function square() that takes an unsigned integer as input and returns its square as output. To this library in another contract, we need to import it using the import statement followed by the path of the file containing the library definition:
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Math.sol";

contract MyContract {
    function calculateSquare(uint256 x) public pure returns (uint256) {
        return Math.square(x);
    }
}
This contract imports the Math library from another file named Math.sol. It then defines a function calculateSquare() that takes an unsigned integer as input and returns its square using the square() function from the imported Math library. Solidity libraries provide many benefits such as code reusability, modularity, and reduced gas cost. There are many libraries available for Solidity such as Red-Black Tree Library, String & Slice Utility Library, DateTime Library, etc.

The concept of libraries in Solidity is analogous to that of contracts in that both store reusable code. A library contains functions that are accessible to other contracts and can be called upon by those contracts. The gas cost can be reduced by deploying common code through the creation of a library. Only functions that are considered pure or view can be called from outside the library. This means that direct library function calls are only possible when the functions in question do not affect the state variables. Due to the presumption that it does not belong to any state, it cannot be destroyed. The library does not contain any state variables, it is unable to inherit any element, and it cannot be inherited by anything else.

To define a library contract, rather than using the term "generic contract," one should use the phrase "library." Because libraries do not have any storage, they are unable to keep state variables, fallback functions, or payment functions. Additionally, functions cannot be constructed within a library because the library cannot store ethers. It is only possible to use libraries for carrying out fundamental operations that are based on inputs and outputs. Libraries cannot be used to alter the state of the contract in any way. However, it can implement some data types like struct and enums, both of which are user-defined, as well as constant variables that are saved in a stack of Ethereum rather than in storage.

For the convenience of its users, Solidity comes with several built-in libraries. The following is a list of some of the libraries:

Modular network: This includes a large number of modular libraries that are quite helpful for implementation. Some examples of these libraries are ArrayUtils, Token, CrowdSale, Vesting, StringUtils, LinkedList, and Wallet, among others.

OpenZeppelin : Roles, MerkleProof, ECDSA, Math, Address, SafeERC20, ERC165Checker, SafeMath, and others that guard against overflow.

Dapp-bin: It was developed by Ethereum and provides several libraries that are both intriguing and useful. Some examples include DoublyLinkedList, StringUtils, and IterableMapping.

Example -
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library SafeMath {
    function add(uint x, uint y) internal pure returns (uint) {
        uint z = x + y;
        require(z >= x, "uint overflow");

        return z;
    }
}

library Math {
    function sqrt(uint y) internal pure returns (uint z) {
        if (y > 3) {
            z = y;
            uint x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
        // else z = 0 (default value)
    }
}

contract TestSafeMath {
    using SafeMath for uint;

    uint public MAX_UINT = 2**256 - 1;

    function testAdd(uint x, uint y) public pure returns (uint) {
        return x.add(y);
    }

    function testSquareRoot(uint x) public pure returns (uint) {
        return Math.sqrt(x);
    }
}

// Array function to delete element at index and reorganize the array
// so that there are no gaps between the elements.
library Array {
    function remove(uint[] storage arr, uint index) public {
        // Move the last element into the place to delete
        require(arr.length > 0, "Can't remove from empty array");
        arr[index] = arr[arr.length - 1];
        arr.pop();
    }
}

contract TestArray {
    using Array for uint[];

    uint[] public arr;

    function testArrayRemove() public {
        for (uint i = 0; i < 3; i++) {
            arr.push(i);
        }

        arr.remove(1);

        assert(arr.length == 2);
        assert(arr[0] == 0);
        assert(arr[1] == 2);
    }
} 
For more content, follow me at - https://linktr.ee/shlokkumar2303

Top comments (0)
Subscribe
pic
Add to the discussion
Code of Conduct • Report abuse
profile
AWS
PROMOTED

Build On AWS Stream

Build On Live Weekly
A weekly live stream about The Cloud, Open Source, Community and everything in between.

Join the conversation

Read next
ilija profile image
Web3 backend and smart contract development for Python developers: Musical NFTs part 2
ilija - Sep 15 '23

johnjvester profile image
5 Web3 Trends We Saw in 2023
John Vester - Sep 13 '23

fromaline profile image
Examining Blockchain Transaction Speed: Real Performance vs. Marketing Claims
Nick - Sep 13 '23

syedmuhammadaliraza profile image
Next.js Advanced Routing Methods
Syed Muhammad Ali Raza - Sep 9 '23


Shlok Kumar
Follow
Blockchain enthusiast and developer | Ethereum developer | Solidity smart contract expert | Bitcoin and cryptocurrency enthusiast
LOCATION
India
EDUCATION
UIT, RGPV
WORK
Founder and CEO at Documento
JOINED
Sep 20, 2021
More from Shlok Kumar
EVM bytecode and its relation to Yul
#yul #ethereum #blockchain #web3
Function Stack and its Usage in Yul
#yul #ethereum #blockchain #web3
Defining and Calling Functions in Yul
#yul #ethereum #blockchain #web3
Bahamut
PROMOTED

Bahamut Foundation: Powering Blockchain Startups
Vkube image

Fuel your DEX, RNG Oracle, Price Feed Oracle, Futures and Margin Trading Modules with Bahamut Blockchain!

Apply now

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library SafeMath {
    function add(uint x, uint y) internal pure returns (uint) {
        uint z = x + y;
        require(z >= x, "uint overflow");

        return z;
    }
}

library Math {
    function sqrt(uint y) internal pure returns (uint z) {
        if (y > 3) {
            z = y;
            uint x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
        // else z = 0 (default value)
    }
}

contract TestSafeMath {
    using SafeMath for uint;

    uint public MAX_UINT = 2**256 - 1;

    function testAdd(uint x, uint y) public pure returns (uint) {
        return x.add(y);
    }

    function testSquareRoot(uint x) public pure returns (uint) {
        return Math.sqrt(x);
    }
}

// Array function to delete element at index and reorganize the array
// so that there are no gaps between the elements.
library Array {
    function remove(uint[] storage arr, uint index) public {
        // Move the last element into the place to delete
        require(arr.length > 0, "Can't remove from empty array");
        arr[index] = arr[arr.length - 1];
        arr.pop();
    }
}

contract TestArray {
    using Array for uint[];

    uint[] public arr;

    function testArrayRemove() public {
        for (uint i = 0; i < 3; i++) {
            arr.push(i);
        }

        arr.remove(1);

        assert(arr.length == 2);
        assert(arr[0] == 0);
        assert(arr[1] == 2);
    }
} 
DEV Community — A constructive and inclusive social network for software developers. With you every step of your journey.

Home
Podcasts
Videos
Tags
FAQ
Forem Shop
Advertise on DEV
About
Contact
Guides
Software comparisons
Code of Conduct
Privacy Policy
Terms of use
Built on Forem — the open source software that powers DEV and other inclusive communities.

Made with love and Ruby on Rails. DEV Community © 2016 - 2024.