const {HDNodeWallet, Mnemonic, ethers, isAddress, parseEther, parseUnits, getBytes} = require('ethers')
const {isNumeric} = require('validator')
const dotenv = require('dotenv')

dotenv.config()

async function TransferController (req, res) {

    const { to, value } = req.body;

    if(!to || !isAddress(to)) {
        return res.status(400).json({message: 'invalid address'})
    }

    if(!value || !isNumeric(value)) {
        return res.status(400).json({message: 'invalid value'})
    }

    const mnemonic = Mnemonic.fromPhrase(process.env.MNEMONIC);

    const account = HDNodeWallet.fromMnemonic(mnemonic, process.env.DERIVATION_PATH + req.user.id);

    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)

    const signer = new ethers.Wallet(account.privateKey, provider);

    const gasPrice =  parseUnits('0.5','gwei')

    const tx = {
        to,
        gasPrice,
    }

    const gas = await provider.estimateGas(tx)

    const gasFee = gas * gasPrice;

    const balance = await provider.getBalance(signer.address)

    if((parseUnits(value, 'wei') + gasFee) > balance) {
        return res.status(402).json({message: 'insufficient balance'}) 
    }

    tx['value'] = value;

    await signer.sendTransaction(tx)

    return res.status(200).json({ message: `success` })

}

module.exports = TransferController