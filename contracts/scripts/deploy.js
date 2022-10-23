// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();

  const Movie = await hre.ethers.getContractFactory("Movie");
  const movie = await Movie.deploy(1000, "ipfs://bafybeif7robpwvzfobyfc4s7hw6i4qcnakrtiz7c24o662ejdgm7bjgvcy/");

  await movie.deployed();
  console.log("contract address:", movie.address);
  console.log("start mint=======================");
  console.log("other balance:", await ethers.provider.getBalance(owner.address) / 1E18);

  const res = await movie.publicMint({ value: ethers.utils.parseEther('0.01') });
  console.log(res);

  const balance = await movie.balanceOf(owner.address);
  console.log("balance of mint:", balance);
  //tokenOfOwnerByIndex
  console.log("other balance:", await ethers.provider.getBalance(owner.address) / 1E18);

  const tokenURI = await movie.tokenURI(0);
  console.log("otherAccount tokenURI:", tokenURI);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
