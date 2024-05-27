require("@nomicfoundation/hardhat-toolbox");
require("dotenv");
/** @type import('hardhat/config').HardhatUserConfig */

const API_KEY = process.env.INFURA_API_KEY;
const PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

module.exports = {
  defaultNetwork: "localhost",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://sepolia.infura.io/v3/${API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
};
