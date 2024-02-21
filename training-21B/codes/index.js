const express = require('express');
const { getDefaultProvider } = require("ethers");

const app = express();


const provider = getDefaultProvider('https://arbitrum-sepolia.blockpi.network/v1/rpc/public');

app.get('/balance/:address', async (req, res) => {
  try {
    const address = req.params.address;
    const balance = await provider.getBalance(address);

    return res.json({ address, balance: balance.toString() });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
