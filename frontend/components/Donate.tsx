import { useState } from "react";
import { Flex, Text, Button, Input, useToast } from "@chakra-ui/react";
import { useAccount, useWriteContract } from "wagmi";
import { contractAddress, contractAbi } from "@/constants";
import { parseEther } from "viem";


const Donate = () => {
  const { address } = useAccount();
  const toast = useToast();
  const [amount, setAmount] = useState(""); // State to hold the donation amount

  const { isPending, writeContract } = useWriteContract();

  const donate = async () => {
    try {
      const weiValue = parseEther(amount); // Convert Ether to wei
      await writeContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: 'donate',
        account: address,
        value: weiValue, // Specify the amount to send in wei
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
      <Input placeholder="Enter amount in ETH" onChange={(e) => setAmount(e.target.value)} />
      <Button onClick={donate} mt="1rem" isLoading={isPending}>
        Donate
      </Button>
    </Flex>
  );
};

export default Donate;