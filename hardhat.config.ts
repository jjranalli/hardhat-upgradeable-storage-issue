import "@openzeppelin/hardhat-upgrades"
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-etherscan"
import "@typechain/hardhat"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: { chainId: 1337 }
  },
  solidity: {
    version: "0.8.16",
    settings: {
      // viaIR: true,
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}
