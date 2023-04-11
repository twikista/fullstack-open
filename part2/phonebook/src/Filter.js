import React from "react";

const Filter = ({ searchHandler, searchQuery }) => {
  return (
    <div>
      search:
      <input
        type="search"
        onChange={searchHandler}
        value={searchQuery}
        placeholder="search by name"
        name="search"
      />
    </div>
  );
};

export default Filter;
