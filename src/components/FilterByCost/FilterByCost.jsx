import React from 'react';
import classes from "./FIlterByCost.module.css"
import FilterWrapper from "../FilterWrapper/FilterWrapper";
import RangeFilter from "../RangeFilter/RangeFilter";

const FilterByCost = ({costFilter, setCostFilter}) => {
  return (
    <FilterWrapper additionalClass={classes.filterByCost} header="По Цене">
      <RangeFilter filter={costFilter} setFilter={setCostFilter}/>
    </FilterWrapper>
  );
};

export default FilterByCost;