import React from "react";
import Image from "next/image";
function Fashion() {
  return (
    <div className="mt-12 overflow-hidden">
      <h1 className="text-md font-bold">Fashion</h1>
      <div className="mt-8 flex justify-between ">
        <div className="relative w-[170px] h-[284px] rounded-md shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1632573801508-4ede5a46c4d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=469&q=80"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className=" p-2 w-[170px] h-[284px] rounded-md shadow-md flex flex-col space-y-2 ">
          <div className="relative h-[142px] w-full">
            <Image
              src="https://images.pexels.com/photos/8706554/pexels-photo-8706554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="relative h-[142px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1601925240970-98447486fcdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fashion;
