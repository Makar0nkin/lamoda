import React, {useState} from 'react';
import classes from "./ListItemFilter.module.css"

const ListItemFilter = ({children, filter, setFilter, id}) => {
  const [isChecked, setIsChecked] = useState(filter.has(children))

  function handleFilter(e){
    e.target.checked
      ? setFilter(new Set(filter).add(children))
      : setFilter(new Set([...filter].filter((color) => color !== children)))
    setIsChecked(e.target.checked)
  }

  return (
    <div className={classes.listItem}>
      <input type="checkbox" id={id} checked={isChecked} onChange={handleFilter}/>
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default ListItemFilter;