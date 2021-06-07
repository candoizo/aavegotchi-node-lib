import "hardhat-abi-exporter";

module.exports = {
  abiExporter: {
    path: './src/contracts/facet_abis/',
    clear: true,
    flat: true,
    only: ['Facet$'],
    spacing: 2
  },
  paths: {
  sources: "./src/contracts/aavegotchi-contracts/contracts",
  cache: "./cache",
  artifacts: "./artifacts"
  },
  solidity: {
    compilers: [{
        version: '0.8.1',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: '0.7.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
};
