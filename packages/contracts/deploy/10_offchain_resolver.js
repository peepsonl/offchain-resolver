const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments, network }) => {
  const { deploy } = deployments;
  const { owner } = await getNamedAccounts();
  // if(!network.config.gatewayurl){
  //     throw("gatewayurl is missing on hardhat.config.js");
  // }
  try {
    const res = await deploy("OffchainResolver", {
      from: owner,
      args: [
        "https://gateway.pps.onl/{sender}/{data}.json",
        [owner, "0x96398CBb4B4C7603c9B589E16D7d5a04f5501071", "0x35C1ACF1C20C5c8647214A5d98bA995032113FEe"],
      ],
      log: true,
    });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
module.exports.tags = ["test", "demo"];
