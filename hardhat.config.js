require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("./tasks/account");

const AURORA_PRIVATE_KEY = process.env.AURORA_PRIVATE_KEY;

module.exports = {
  networks: {
    testnet_aurora: {
      url: 'https://testnet.aurora.dev',
      accounts: [`0x${AURORA_PRIVATE_KEY}`],
      // accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      chainId: 1313161555,
      gasPrice: 120 * 1000000000
    }, 
  },
  local_aurora: {
    url: 'http://localhost:8545',
    accounts: [`0x${AURORA_PRIVATE_KEY}`],
    chainId: 1313161555,
    gasPrice: 120 * 1000000000
  },
  ropsten: {
    url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
    accounts: [`0x${AURORA_PRIVATE_KEY}`],
    chainId: 3,
    live: true,
    gasPrice: 50000000000,
    gasMultiplier: 2,
  },
  solidity: "0.8.4",
  mocha: {
    timeout: 600000
  }
};