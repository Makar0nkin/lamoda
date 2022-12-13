import React from 'react';
import classes from "./SearchPanel.module.css"

const SearchPanel = ({setSearch}) => {
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <input
      className={classes.panel}
      type="text"
      onChange={handleSearch}
    />
  );
};

export default SearchPanel;