import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="mt-12 border  border-gray-400 flex items-center py-3 shadow-xl h-[60px] w-full rounded-full">
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
        className="outline-none max-w-[280px] pl-5 flex-grow"
        placeholder="Search Any Product"
      />
      <div className=" bg-gray-200 w-12 h-12 rounded-full flex items-center justify-center ">
        <SearchIcon className="h-6 text-gray-500 " />
      </div>
    </div>
  );
}

export default Search;
