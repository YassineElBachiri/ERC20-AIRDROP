'use client'

import Layout from "@/components/Layout";
import Mint from "@/components/Mint";
import Donate from "@/components/Donate";
import { useAccount } from "wagmi";
import NotConnected from "@/components/NotConnected";

export default function Home() {
  const {address, isConnected} = useAccount();

  return <Layout>{isConnected ? (<Donate />) : (<NotConnected />)}</Layout>;
}
