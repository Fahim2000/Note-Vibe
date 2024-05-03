import React from 'react';
import { MdSearch } from 'react-icons/md';

const SearchBar = ({ setSearchText }) => {
 
  return (
    <div className="flex items-center bg-[#E9E9E9] rounded-full p-2 mb-5">
      <MdSearch className="mr-1"></MdSearch>
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search your Note..."
      ></input>
    </div>
  );
};

export default SearchBar;