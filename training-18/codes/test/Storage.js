

const { expect } = require("chai");


describe("Storage", function() {

    var storage;

    before("it should deploy contract", async function() {
        const Storage = await ethers.getContractFactory("Storage");
        storage = await Storage.deploy()
    })


    it("should return zero", async function() {
        expect(await storage.retrieve()).to.be.equal(ethers.parseUnits("0", "wei"));
    })

    it("should return one", async function() {
        await storage.store(1);
        expect(await storage.retrieve()).to.be.equal(ethers.parseUnits("1", "wei"));
    })


});