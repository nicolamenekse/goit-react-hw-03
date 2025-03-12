import React from "react";
import css from './SearchBox.module.css'


const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={css.searchBox}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;