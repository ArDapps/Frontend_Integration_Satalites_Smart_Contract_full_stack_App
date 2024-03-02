"use client";
import { NavBar } from "@/components/NavBar";
import { GetContract } from "@/hookes/getContract";
import { useDisconnect, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
const DashbordPage = () => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { disconnect } = useDisconnect();

  console.log("iam her at layput of dashbaord");

  useEffect(() => {
    getAdminAddress();
  }, [GetContract, address]);

  const router = useRouter();
  const getAdminAddress = async () => {
    console.log("MNMN====>eeee");

    const contract = await GetContract();
    console.log("MNMN====>", contract);
    const isExistToWatchData = await contract.addressExists(address);

    if (!isExistToWatchData) {
      disconnect();
      router.refresh();
    }
    console.log(isExistToWatchData, "AMDIN");
  };

  return (
    <div className="container mx-auto">
      <NavBar />
      <p className="text-center text-7xl font-bold pt-12 text-main-dark-color">
        Satellites Blockchain Network{" "}
        <span className=" text-main-green-color">Data</span>{" "}
      </p>
    </div>
  );
};

export default DashbordPage;
