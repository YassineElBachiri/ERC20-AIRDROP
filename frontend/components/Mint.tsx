import { useState } from "react";
import { Flex, Text, Button, useToast } from "@chakra-ui/react";
import { useAccount, useWriteContract } from "wagmi";
import { contractAddress, contractAbi } from "@/constants";
import { formatEther } from "viem"; // Corrected import

const Donate = () => {
  const { address } = useAccount();
  const toast = useToast();

  const { isPending, writeContract } = useWriteContract(); // Removed unused variables

  const donate = async () => {
    try {
        // Assuming you want to send 1 ETH, adjust the argument accordingly
        await writeContract({
          address: contractAddress,
          abi: contractAbi,
          functionName: 'donate',
          account: address,
          args: [1], // Uncommented and adjusted for demonstration
        });
        toast({
          title: "Donation successful.",
          description: "Your donation has been processed.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        console.error("Donation failed:", error);
        toast({
          title: "Donation failed.",
          description: "An error occurred during the donation process.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
  };

  return (
    <Flex direction="column" width={['100%', '100%', '50%', '50%']}>
      <Flex justifyContent="center">
        <Text mt="1rem">Donate to the Manager:</Text>
      </Flex>
      
      <Button onClick={donate} mt="1rem" isLoading={isPending}>
        Donate 1 ETH
      </Button>
    </Flex>
  );
};

export default Donate;