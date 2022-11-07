const ApsaToken = artifacts.require("HalalToken");

module.exports = function(deployer) {
  deployer.deploy(ApsaToken);
};
