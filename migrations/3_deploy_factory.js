const path = require('path');

require('dotenv').config({path: path.join(__dirname, "../.env")});

var EscrowFactory = artifacts.require("EscrowFactory");

// be sure before running this migraiton to update HMTOKEN_ADDR in .env
module.exports = function(deployer) {
  console.log("Deploying for HMT@" + process.env.HMTOKEN_ADDR);
  deployer.deploy(EscrowFactory, process.env.HMTOKEN_ADDR);
};