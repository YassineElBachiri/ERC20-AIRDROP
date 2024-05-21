import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect, assert } from "chai";
import hre, { ethers } from "hardhat";


// Types
import {Portfolio} from "../typechain-types";
import type { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers"; 



describe("Portfolio Tests", function(){
  let contract : Portfolio;

  let owner: SignerWithAddress; //WhiteListed



  async function deployContractFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();


    const contractFactory = await ethers.getContractFactory("Portfolio");
    const contract = await contractFactory.deploy();

    return {contract , owner}
    
  }

  //deployement
  describe('Deployement', function(){
    it('Should deploy the smart contract', async function() {
      const {contract, owner} = await loadFixture(deployContractFixture);
      let contractOwner = await contract.manager();

      assert(contractOwner === owner.address);
      
    })
  })

  
})