const { utils, providers, Wallet } = require('ethers')
const {
    EthBridger,
    getL2Network,
    EthDepositStatus,
    addDefaultLocalNetwork,
} = require('@arbitrum/sdk')
const { parseEther } = utils

require('dotenv').config()



const walletPrivateKey = process.env.DEVNET_PRIVKEY;

const l1Provider = new providers.JsonRpcProvider(process.env.L1RPC);
const l2Provider = new providers.JsonRpcProvider(process.env.L2RPC);

const l1Wallet = new Wallet(walletPrivateKey, l1Provider);

const destinationAddress = '0x337a8b1f5aBd2A656255d7195c71C391248c893F';

const amount = parseEther('0.302');

const main = async () => {
    addDefaultLocalNetwork();


    const l2Network = await getL2Network(l2Provider);

    const ethBridge = new EthBridger(l2Network);

    const depositTx = await ethBridge.depositTo({
        amount: amount,
        l1Signer: l1Wallet,
        l2Provider: l2Provider,
        destinationAddress: destinationAddress
    })

    const depositRec = await depositTx.wait();
    console.log(`Deposit l1 hash is : ${depositRec.transactionHash}`);


    console.log('Now we wait for l2 confirmation');

    const l2Result = await depositRec.waitForL2(l2Provider);
    l2Result.complete ? console.log(`L2 message successful: ${l2Result.message.status()} `) : console.log('it failed')




}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })
