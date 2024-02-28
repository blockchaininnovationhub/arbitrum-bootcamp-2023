require('@nomiclabs/hardhat-ethers');

module.exports = {

    networks: {

        hardhat: {
            gas: 'auto', // Default is 30000000
        },
        l1: {
            gas: 2100000,
            gasLimit: 0,
            url: process.env['L1RPC'] || '',
            accounts: process.env['DEVNET_PRIVKEY']
                ? [process.env['DEVNET_PRIVKEY']]
                : [],
        },
        l2: {
            url: process.env['L2RPC'] || '',
            accounts: process.env['DEVNET_PRIVKEY']
                ? [process.env['DEVNET_PRIVKEY']]
                : [],
        },
    },
}
