import React, {useEffect, useState} from 'react';
import classes from "./FilterButton.module.css"

const FilterButton = ({children, id, sort, setSort, isChecked, setCheckedButton}) => {
  const handleSort = (e) => {
    if (isChecked){
      setSort({fn: () => {}})
      setCheckedButton(0)
    }
    else {
      setSort(sort)
      setCheckedButton(id)
    }
  }

  return (
    <label htmlFor={id} className={classes.filterButton}>
      <input
        type="radio"
        id={id}
        name="filter"
        checked={isChecked}
        onClick={handleSort}
      />
      <span>{children}</span>
    </label>
  );
};

export default React.memo(FilterButton)