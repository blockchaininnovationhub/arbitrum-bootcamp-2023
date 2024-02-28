const {HDNodeWallet, Mnemonic} = require('ethers')
const dotenv = require('dotenv')

dotenv.config()

async function GetWalletAddressController (req, res) {

    const mnemonic = Mnemonic.fromPhrase(process.env.MNEMONIC);

    const account = HDNodeWallet.fromMnemonic(mnemonic, process.env.DERIVATION_PATH + req.user.id);

    return res.status(200).json({ address: account.address })

}

module.exports = GetWalletAddressController