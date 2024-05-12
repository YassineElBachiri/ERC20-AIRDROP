import {ethers} from "hardhat";

// Types
import { YEBERC20 } from "../typechain-types";
import { StandardMerkleTree } from "@openzeppelin/merkle-tree";


// WhiteListed
import { whiteListed } from "../utils/whiteListed";


async function main() {

    let contract: YEBERC20;
    let merkleTree: StandardMerkleTree<string[]>

    merkleTree = StandardMerkleTree.of(whiteListed,["address"], {sortLeaves: true});

    const [owner] =  await ethers.getSigners();
    contract = await ethers.deployContract("YEBERC20", [owner.address, merkleTree.root]);

    await contract.waitForDeployment();


    console.log(
        `YEBERC20 deployed to ${contract.target} with merkleRoot ${merkleTree.root}`
      );

}



main().catch((error) => {
    console.error(error)
    process.exitCode = 1;
})