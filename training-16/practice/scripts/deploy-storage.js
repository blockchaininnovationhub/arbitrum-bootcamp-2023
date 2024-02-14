const hre = require("hardhat")

async function main() {
    const storageContract = await hre.ethers.deployContract("Storage")

    await storageContract.waitForDeployment()

    console.log(storageContract.target)
}

main()