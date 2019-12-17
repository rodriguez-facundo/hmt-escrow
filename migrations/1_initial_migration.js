const Migrations = artifacts.require('./Migrations.sol');
const EscrowFactory = artifacts.require('./EscrowFactory.sol');

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(EscrowFactory,'0x673d72Cc7Cd868cD56726f714D7A5d2E2238CACb');
};
