const { task } = require("hardhat/config");

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("hardhat-deploy");
require("hardhat-deploy-ethers");

const realAccounts = process.env.PRIVATE_KEYS.split(";;");
const gatewayUrls = process.env.GATEWAY_URL.split(";;").map((url) => `${url}/{sender}/{data}.json`);

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      throwOnCallFailures: false,
      gatewayUrls,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`,
      tags: ["test", "demo"],
      chainId: 3,
      accounts: realAccounts,
      gatewayUrls,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_ID}`,
      tags: ["test", "demo"],
      chainId: 4,
      accounts: realAccounts,
      gatewayUrls,
    },
    goerli: {
      // url: `https://goerli.infura.io/v3/${process.env.INFURA_ID}`,
      url: "https://goerli.infura.io/v3/1e5daf82dd6e4cefb0c4982606872d75",
      tags: ["test", "demo"],
      chainId: 5,
      accounts: realAccounts,
      gatewayUrls,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_ID}`,
      tags: ["demo"],
      chainId: 1,
      accounts: realAccounts,
      gatewayUrls,
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    owner: {
      default: 0,
    },
    deployer: {
      default: 1,
    },
  },
};
