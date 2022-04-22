import React from "react";
import { topSellers } from "../data/data.js";
import Image from "next/image";
import { PlusCircleIcon } from "@heroicons/react/solid";

function TopSellers() {
  return (
    <div className="mt-12">
      {" "}
      <h1 className="text-md font-bold">Top Sellers</h1>
      <div className="mt-8 flex items-center justify-between overflow-scroll no-scrollbar space-x-3">
        {topSellers.map((topSeller) => (
          <>
            <div key={topSeller.id} className="">
              <div className="relative min-w-[150px] h-[170px] flex items-center mb-4 border shadow-md">
                <Image
                  layout="fill"
                  src={topSeller.image}
                  objectFit="cover"
                  className=" w-full h-full"
                />
              </div>
              <p className="text-gray-500 text-xs mt-6 max-w-[400px] ">
                {topSeller.name}
              </p>
              <p className="mt-7 font-bold">Kshs {topSeller.price}/=</p>
              <button className="mt-4 bg-green-500 text-white font-bold flex items-center px-1 py-3 w-full justify-between">
                Add to Cart
                <PlusCircleIcon className=" h-7" />
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default TopSellers;
