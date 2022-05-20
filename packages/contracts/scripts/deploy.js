async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("OffchainResolver");
  const token = await Token.deploy(
    "http://localhost:8080/{sender}/{data}.json",
    [
      "0xa560E2A9034be5ff7FB38E1fABF56dC0e0698858",
      "0x35C1ACF1C20C5c8647214A5d98bA995032113FEe",
    ]
  );

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
