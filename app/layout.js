"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Web3Modal, Web3ModalProvider } from "../context/Web3Modal";
import {
  useWeb3Modal,
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useEffect } from "react";
export default function RootLayout({ children }) {
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  useEffect(() => {
    console.log(address, isConnected);
  }, []);
  return (
    <html lang="en">
      <body>
        <Web3ModalProvider>{children}</Web3ModalProvider>
      </body>
    </html>
  );
}
