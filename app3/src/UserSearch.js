import React from "react";

function UserSearch({ onSearch }) {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" name="search" onChange={handleSearch} />
    </div>
  );
}

export default UserSearch;