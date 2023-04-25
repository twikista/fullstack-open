import React from "react";

const Filter = ({ setQuery, searchQuery }) => {
  return (
    <div>
      search:
      <input
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        value={searchQuery}
        placeholder="search by name"
        name="search"
      />
    </div>
  );
};

export default Filter;
