const {HDNodeWallet, Mnemonic, JsonRpcProvider} = require('ethers')
const dotenv = require('dotenv')

dotenv.config()

async function GetWalletBalanceController (req, res) {

    const mnemonic = Mnemonic.fromPhrase(process.env.MNEMONIC);
    const account = HDNodeWallet.fromMnemonic(mnemonic, process.env.DERIVATION_PATH + req.user.id);
    const provider = new JsonRpcProvider(process.env.RPC_URL);

    const balance = await provider.getBalance(account.address);

    return res.status(200).json({balance: balance.toString()})

}

module.exports = GetWalletBalanceController