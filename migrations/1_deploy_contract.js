var Disaster = artifacts.require("./disaster.sol");

module.exports = function(deployer) {
  deployer.deploy(Disaster);
};