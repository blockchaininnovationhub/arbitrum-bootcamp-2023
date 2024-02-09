const hre = require("hardhat");

async function main() {

   const storage = await hre.ethers.deployContract("Storage");

    storage.waitForDeployment()


   console.log("the contract has been deployed to "+ storage.target)
 

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  