"use client";

import React, { useState } from "react";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Search submitted for:", query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full lg:w-[255px] px-[25px] py-[12px] lg:py-[15px] bg-secondary-bg rounded-full flex items-center mt-[20px] lg:mt-0"
    >
      <img src="/icons/search.svg" alt="search" width={16} height={16} />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for something"
        className=" focus:outline-none text-primary placeholder:text-secondary bg-transparent w-full ml-[16px] text-[13px] lg:text-[15px]"
      />
    </form>
  );
};

export default Search;
