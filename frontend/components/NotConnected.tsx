'use client';
import { Alert, AlertIcon } from "@chakra-ui/react";


const NotConnected = () => {
  return (
    <Alert status="warning">
        <AlertIcon />
        Please Connect Your Wallet
    </Alert>
  )
}

export default NotConnected