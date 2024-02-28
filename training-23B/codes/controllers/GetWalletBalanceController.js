const {HDNodeWallet, Mnemonic, ethers} = require('ethers')
const dotenv = require('dotenv')

dotenv.config()

async function GetWalletBalanceController (req, res) {

    const mnemonic = Mnemonic.fromPhrase(process.env.MNEMONIC);

    const account = HDNodeWallet.fromMnemonic(mnemonic, process.env.DERIVATION_PATH + req.user.id);

    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)

    const signer = new ethers.Wallet(account.privateKey, provider);

    const balance = await provider.getBalance(signer.address)

    return res.status(200).json({ balance:  balance.toString()})

}

module.exports = GetWalletBalanceController