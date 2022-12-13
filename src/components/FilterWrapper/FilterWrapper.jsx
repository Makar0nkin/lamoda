import React from 'react';
import classes from "./FilterWrapper.module.css"

const FilterWrapper = ({header, children, additionalClass}) => {
  return (
    <div className={[classes.filterWrapper, additionalClass].join(" ")}>
      <div className={classes.filterWrapperHeader}>{header}</div>
      {children}
    </div>
  );
};

export default FilterWrapper;