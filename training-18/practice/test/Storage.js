const { expect } = require("chai");


describe("Test Storage Contract", function() {

    var storage;

    before("deploy the whole test", async function() {
        const StorageContract = await ethers.getContractFactory("Storage");

        storage = await StorageContract.deploy();
    })

    it("number should return zero by default", async function() {
        expect(await storage.retrieve()).to.be.equal(0);
    })

    it("should successfully store a number", async function() {
        await expect(storage.store(10)).to.not.be.reverted;
    })

    it("should successfully return 10", async function() {
        expect(await storage.retrieve()).to.be.equal(ethers.parseUnits('10', 'wei'));
    })

})