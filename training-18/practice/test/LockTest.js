const { expect } = require("chai");
const { time  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

  describe("Test Lock Contract", function() {

    var lock;
    var unlockTime;
    var hacker;
    var owner;

    before("deploy contract at first", async function() {
        const LockContract = await ethers.getContractFactory("Lock");
        const currentTime = await time.latest();

        [owner, hacker] = await ethers.getSigners();

        unlockTime = currentTime + (60 * 60);

        lock = await LockContract.deploy(unlockTime, { value: ethers.parseUnits('1', 'ether') });
    });

    it("it should fail while withdrawing because of time", async function() {
        await expect(lock.withdraw()).to.be.reverted;
    })


    it("it should fail while withdrawing with reason", async function() {
        await expect(lock.withdraw()).to.be.revertedWith("You can't withdraw yet");
    })

    it("it should fail because it is not the owner", async function() {
        await time.increaseTo(unlockTime);
        await expect(lock.connect(hacker).withdraw()).to.be.revertedWith("You aren't the owner");
    })

    it("it should successfully withdraw", async function() {
        await expect(lock.withdraw()).to.not.be.reverted;
    })




});