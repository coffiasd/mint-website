// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const [owner, otherAccount] = await ethers.getSigners();
    // console.log("owner address:", owner, " other address:", otherAccount);

    const Movie = await hre.ethers.getContractFactory("Movie");
    const movie = await Movie.deploy(3, "ipfs://bafybeif7robpwvzfobyfc4s7hw6i4qcnakrtiz7c24o662ejdgm7bjgvcy/");

    await movie.deployed();
    console.log("contract address:", movie.address);
    console.log("start mint=======================");
    console.log("other balance:", await ethers.provider.getBalance(otherAccount.address) / 1E18);

    await movie.connect(otherAccount).publicMint({ value: ethers.utils.parseEther('1') });

    //stop mint
    await movie.connect(owner).pause();
    //start mint
    await movie.connect(owner).unpause();

    await movie.connect(otherAccount).publicMint({ value: ethers.utils.parseEther('1') });
    await movie.connect(otherAccount).publicMint({ value: ethers.utils.parseEther('1') });
    const balance = await movie.connect(otherAccount).balanceOf(otherAccount.address);
    console.log("balance of otheraddres:", balance);
    //tokenOfOwnerByIndex

    console.log("other balance:", await ethers.provider.getBalance(otherAccount.address) / 1E18);

    const tokenURI = await movie.tokenURI(0);
    console.log("otherAccount tokenURI:", tokenURI);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
