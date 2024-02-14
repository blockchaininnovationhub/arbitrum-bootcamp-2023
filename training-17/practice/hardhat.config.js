require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    "arbitrumSepolia": {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      chainId: 421614,
      accounts: [""]
    }
  },
  etherscan: {
    apiKey: {
      "arbitrumSepolia": ""
    }
  },
  sourcify: {
    enabled: true
  }
};
