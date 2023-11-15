import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';
import "./tasks/index"

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          }
        }
      },
    ]
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // url: 'http://127.0.0.1:8545',
      allowUnlimitedContractSize: true,
    },
    scrolltest: {
      chainId: 534351,
      // url: 'https://1rpc.io/scroll/sepolia',
      url: 'https://sepolia-rpc.scroll.io',
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
    scroll: {
      chainId: 534352,
      url: 'https://rpc.scroll.io',
      accounts: [process.env.WALLET_PRIVATE_KEY_MAIN],
    }
  },
};

export default config;
