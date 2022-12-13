import React from 'react';
import classes from "./FilterByColor.module.css"
import {possibleColors} from "../../utils/PossibleInfo";
import FilterWrapper from "../FilterWrapper/FilterWrapper";
import ListOfFilters from "../ListOfFilters/ListOfFilters";

const FilterByColor = ({colorFilter, setColorFilter}) => {
  return (
    <FilterWrapper additionalClass={classes.filterByColor} header="По цвету">
      <ListOfFilters
        listElements={possibleColors}
        filter={colorFilter}
        setFilter={setColorFilter}
      />
    </FilterWrapper>
  );
};

export default FilterByColor;