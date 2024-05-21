import { useState } from "react";
import { Flex, Text, Button, useToast } from "@chakra-ui/react";
import { useAccount, useWriteContract } from "wagmi";
import { contractAddress, contractAbi } from "@/constants";
import { formatEther } from "viem";

const Donate = () => {
  const { address } = useAccount();
  const toast = useToast();

  const [recipientAddress, setRecipientAddress] = useState<string>('');

  const { data: hash, isPending, writeContract } = useWriteContract();

  const donate = async () => {
    try {
        await writeContract({
          address: contractAddress,
          abi: contractAbi,
          functionName: 'donate',
          account: address,
        //   args: [recipientAddress],
        });
        toast({
          title: "Donation successful.",
          description: "Your donation has been processed.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        console.error("Donation failed:", error); // Log the error for debugging
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
      <Flex justifyContent="center">
        <Text mt="1rem">Enter Recipient Address:</Text>
        <input
          type="text"
          value={recipientAddress}
          onChange={(e) => setRecipientAddress(e.target.value)}
          placeholder="0x..."
        />
      </Flex>
      <Button onClick={donate} mt="1rem" isLoading={isPending}>
        Donate 1 ETH
      </Button>
    </Flex>
  );
};

export default Donate;