import { NavBar } from "@/components/NavBar";
import { GetContract } from "@/hookes/getContract";
import React from "react";
import { useEffect } from "react";
const DashbordPage = () => {
  useEffect(() => {
    getAdminAddress();
  }, [GetContract]);

  const getAdminAddress = async () => {
    console.log("MNMN====>eeee");

    const contract = await GetContract();
    console.log("MNMN====>", contract);
    const admin = await contract.admin();
    console.log(admin, "AMDIN");
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
