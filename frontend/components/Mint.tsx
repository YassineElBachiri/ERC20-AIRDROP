'use client';

// ReactJS
import { useState, useEffect } from "react";

// ChakraUI
import { Flex, Text, Button, Spinner, useToast, Alert, AlertIcon } from "@chakra-ui/react";


//Wagmi
import { useAccount, useReadContract, type BaseError, useWriteContract, useWaitForTransactionReceipt } from "wagmi";

// Contract informations
import { contractAddress, contractAbi, whiteListed } from "@/constants";

// Merkle Tree by OZ
import { StandardMerkleTree } from "@openzeppelin/merkle-tree";

// Layout
import Layout from "./Layout";

const Mint = () => {
  return (
    <div>Mint</div>
  )
}

export default Mint