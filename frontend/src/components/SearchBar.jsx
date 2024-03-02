import React from 'react';

function SearchBar({ setSearchValue }) {
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="searchBar"
        placeholder="Search by username or location"
        onChange={handleSearchChange}
        className='border-2 w-48 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none'
      />
    </div>
  );
}

export default SearchBar;
