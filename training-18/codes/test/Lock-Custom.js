const { expect } = require("chai");
const {
    time,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("Lock", function () {

    var lock;
    var owner;
    var hacker;
    var unlockTime;

    before("should deploy", async function() {
        [owner, hacker] = await ethers.getSigners();
        const Lock = await ethers.getContractFactory("Lock");
        const ONE_HOUR = 60 * 60;

        unlockTime = await time.latest() + ONE_HOUR;
        lock = await Lock.deploy(unlockTime, { value: ethers.parseUnits('1', 'ether')})
    });

    it("withdrawal should fail", async function() {
        await expect(lock.withdraw()).to.be.reverted;
    });

    it("withdrawal should fail with you can't withdraw yet", async function() {
        await expect(lock.withdraw()).to.be.revertedWith("You can't withdraw yet");
    });

    it("withdrawal should fail with the wrong owner", async function() {
        await time.increaseTo(unlockTime);
        await expect(lock.connect(hacker).withdraw()).to.be.revertedWith("You aren't the owner");
    });

    it("withdrawal should succeed", async function() {
        await expect(lock.withdraw()).to.not.be.reverted;
    });
})