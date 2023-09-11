/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'sepolia',
    networks: {
      hardhat: {},
      goerli: {
        url: 'https://rpc.ankr.com/eth_sepolia/63d560fbad5f5cdb86f42e7c0f6efa95cc299805349fa987e91446b2a33594c6',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};