import {ethers} from "hardhat";

// Types
import { Portfolio } from "../typechain-types";



async function main() {

    let contract: Portfolio;


    const [owner] =  await ethers.getSigners();
    contract = await ethers.deployContract("Portfolio");

    await contract.waitForDeployment();


    console.log(
        `Portfolio deployed to ${contract.target}`
      );

}



main().catch((error) => {
    console.error(error)
    process.exitCode = 1;
})