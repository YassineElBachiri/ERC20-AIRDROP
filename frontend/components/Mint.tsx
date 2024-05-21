'use client'
// ReactJS
import { useState, useEffect } from "react"

// ChakraUI
import { Flex, Text, Button, Spinner, useToast, Alert, AlertIcon } from "@chakra-ui/react"

// Wagmi
import { useAccount, useReadContract, type BaseError, useWriteContract, useWaitForTransactionReceipt } from "wagmi"

// Contract informations
import { contractAddress, contractAbi } from "@/constants"

// Viem
import { formatEther } from "viem"


// Layout
import Layout from "./Layout"
import { error } from "console"

const Mint = () => {

  const { address } = useAccount()
  const toast = useToast();

  // Get the total amount of the YEB tokens airdroppped
  const { data: totalSupply, isLoading: totalSupplyLoading, refetch: refetchTotalSupply } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'totalSupply',
    account: address
  })

  const formatTotalSupply = (supply: bigint | undefined) => {
    if (supply !== undefined) {
      return formatEther(supply);
    }
    return "0";
  };

  const { data: hash, error: airdropError, isPending, writeContract } = useWriteContract() 

  const getAirdrop = async() => {
    writeContract({
      address: contractAddress,
      abi: contractAbi,
      functionName: 'donate',
      account: address,
      args: [address]
    });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ 
    hash, 
  })

  useEffect(() => {
    isConfirmed && refetchTotalSupply();
  }, [isConfirmed])

 

  return (
    <Flex
      direction="column"
      width={['100%', '100%', '50%', '50%']}
    >
      {totalSupplyLoading ? (
        <Flex justifyContent="center">
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </Flex>
      ) : (
        <>
          <Flex justifyContent="center">
            <Text mt="1rem">Amount Airdrop given : <Text as='b'>{formatTotalSupply(totalSupply as bigint | undefined)} YEB</Text></Text>
          </Flex>
         
          
           
              <Button onClick={() => getAirdrop()} mt="1rem">{isPending ? 'Minting...' : 'Mint'}</Button>
            </>
          )}
    </Flex>
  )
}

export default Mint