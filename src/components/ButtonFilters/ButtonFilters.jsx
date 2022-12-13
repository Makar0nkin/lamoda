import React, {useState} from 'react';
import classes from "./ButtonFilters.module.css"
import FilterButton from "../FilterButton/FilterButton";

const  ButtonFilters = ({buttons, setSort}) => {
  const [checkedButton, setCheckedButton] = useState(0)
  return (
    <div className={classes.filters}>
      {buttons.map((btn) => (
        <FilterButton
          {...btn}
          key={btn.id}
          setSort={setSort}
          setCheckedButton={setCheckedButton}
          isChecked={btn.id === checkedButton}
        >
          {btn.children}
        </FilterButton>
      ))}
    </div>
  );
};

export default ButtonFilters