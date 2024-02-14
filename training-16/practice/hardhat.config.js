require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "arbitrum-sepolia",
  networks: {
    "arbitrum-sepolia": {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      chainId: 421614,
      accounts: ['0x1d89d173cf4c0d645ee8b94c2065b52b692cdac03f336075ab565d8bc922d994']
    }
  }
};
