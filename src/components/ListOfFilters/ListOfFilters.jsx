import React from 'react';
import classes from "./ListOfFilters.module.css"
import {getRandomString} from "../../utils/Generator"
import ListItemFilter from "../ListItemFilter/ListItemFilter";

const ListOfFilters = ({listElements, filter, setFilter}) => {
  return (
    <div className={classes.list}>
      {listElements.map((li) => (
        <ListItemFilter
          filter={filter}
          setFilter={setFilter}
          id={getRandomString() + new Date().getMilliseconds()}
          key={getRandomString() + new Date().getMilliseconds()}
        >
          {li}
        </ListItemFilter>
      ))}
    </div>
  );
};

export default ListOfFilters;