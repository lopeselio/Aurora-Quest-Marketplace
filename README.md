# AuroraQuest Marketplace

This is the place to shop your game assets using the DGN game token and later use these to equip the purchased heroes inside the dungeon based AuroraQuest Game on the NEAR Aurora Testnetwork. You can obtain DGN (Game Native Token) token by swapping an equivalent amount of Aurora Rinkeby ETH  on the swap inside our Metaverse.



# Smart Contracts Deployed to Emerald Paratime Network
`nftaddress = "0x5c089556FA8814E4A7065188C6bc33FFB6274cA1"` 

[Verify Here on Aurora Testnet Explorer on Near Blockchain](https://testnet.aurorascan.dev/address/0x5c089556FA8814E4A7065188C6bc33FFB6274cA1)

`nftmarketaddress ="0x19e741b2d04cd79E1e163cFE7027b02A2B8A6EE5"`

[Verify Here on Aurora Testnet Explorer on Near Blockchain](https://testnet.aurorascan.dev/tx/0x4c2494a2dea9ffdd1b10d0bb6db22d4cfe17f4af78f2e7fc8fda0fb92dc73f14)


Refer to `hardhat.config.js`:
`
module.exports = {
  networks: {
    testnet_aurora: {
      url: 'https://testnet.aurora.dev',
      accounts: [`0x${AURORA_PRIVATE_KEY}`],
      chainId: 1313161555,
      gasPrice: 120 * 1000000000
    }, 
  },
  solidity: "0.8.4",
  mocha: {
    timeout: 600000
  }
};
`


# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
