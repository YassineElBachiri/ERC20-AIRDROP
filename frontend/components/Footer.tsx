'use client';

import { Flex, Text } from "@chakra-ui/react";


const Footer = () => {
  return (
    <Flex
    justifyContent="center"
    alignItems= "center"
    p="2rem">

        <Text>All right reserved &copy; YEB
            {new Date().getFullYear()}
        </Text>
    </Flex>
  )
}

export default Footer