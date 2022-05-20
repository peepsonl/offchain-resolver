const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments, network }) => {
  const { deploy } = deployments;
  const { deployer, owner } = await getNamedAccounts();
  // if(!network.config.gatewayurl){
  //     throw("gatewayurl is missing on hardhat.config.js");
  // }
  try {
    const res = await deploy("OffchainResolver", {
      from: deployer,
      args: [
        "http://localhost:8080/{sender}/{data}.json",
        [owner, "0x35C1ACF1C20C5c8647214A5d98bA995032113FEe"],
      ],
      log: true,
    });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
module.exports.tags = ["test", "demo"];
