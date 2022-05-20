const { ethers } = require("hardhat");

module.exports = async ({getNamedAccounts, deployments, network}) => {
    const {deploy} = deployments;
    const {deployer, owner} = await getNamedAccounts();
    if(!network.config.gatewayurl){
        throw("gatewayurl is missing on hardhat.config.js");
    }
    await deploy('OffchainResolver', {
        from: deployer,
        args: [network.config.gatewayurl, [owner,'0x35C1ACF1C20C5c8647214A5d98bA995032113FEe']],
        log: true,
    });
};
module.exports.tags = ['test', 'demo'];
