require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0d995b693d1902256f8f645f747365b21d73d3e9332b3f360009ee240b0e8421"], //Your private key starting with "0x"
    },
  },
};