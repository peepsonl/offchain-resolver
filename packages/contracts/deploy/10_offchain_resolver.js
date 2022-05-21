module.exports = async ({ getNamedAccounts, deployments, network }) => {
  const { deploy } = deployments;
  const { ...allAccounts } = await getNamedAccounts();
  if(!network.config.gatewayUrls){
      throw("gatewayUrls is missing on hardhat.config.js");
  }
  try {
    const res = await deploy("OffchainResolver", {
      from: deployer,
      args: [
        network.config.gatewayUrls,
        [...allAccounts],
      ],
      log: true,
    });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
module.exports.tags = ["test", "demo"];
