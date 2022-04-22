import React from "react";
import Image from "next/image";

import { categories } from "../data/data.js";

function Categories() {
  return (
    <div className="mt-12">
      <h1 className="text-md font-bold">Categories</h1>
      <div className="mt-8 flex items-center justify-between overflow-scroll no-scrollbar space-x-3">
        {categories.map((category) => (
          <>
            <div key={category.id}>
              <div className="relative border  rounded-full min-w-[150px] h-[150px] flex items-center mb-4">
                <Image
                  layout="fill"
                  src={category.image}
                  objectFit="cover"
                  className="rounded-full w-full h-full"
                />
              </div>
              <p className="text-center text-gray-500">{category.name}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Categories;
