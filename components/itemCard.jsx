import React from "react";
import Image from "next/image";

export const ItemCard = () => {
  return (
    <div className="bg-main-dark-color text-white  inline-block m-2 p-2">
      <Image
        src={
          "https://open-sky.infura-ipfs.io/ipfs/QmTpM41yYtfqwgH5KmTdSJvkse9PDv3kMmZhLHTVmexfAw"
        }
        width={300}
        height={300}
        className="rounded-md h-[150px]  object-cover"
      />

      <div className="p-3 ">
        <p className=" text-xl">
          <span className="text-2xl font-bold text-main-red-color">
            Location
          </span>
          :1235894,12365894
        </p>
        <p className=" text-main-green-color text-xl">
          <span className="text-xl font-bold text-main-red-color">Date</span>
          :2015-07-12 14:59:23
        </p>
      </div>
    </div>
  );
};
