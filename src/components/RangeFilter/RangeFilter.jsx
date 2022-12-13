import React, {useState} from 'react';
import classes from "./RangeFilter.module.css"

const RangeFilter = ({filter, setFilter}) => {
  const [minValue, setMinValue] = useState(filter.get("min"))
  const [maxValue, setMaxValue] = useState(filter.get("max"))

  const setMax = (number) => {
    setMaxValue(number)
    setFilter(new Map(filter.set("max", number)))
  }
  
  const setMin = (number) => {
    setMinValue(number)
    setFilter(new Map(filter.set("min", number)))
  }
  
  const handleMinValue = (e) => {
    if (e.target.value > maxValue)
      setMax(+e.target.value)
    setMin(+e.target.value)
  }

  const handleMaxValue = (e) => {
    if (e.target.value < minValue)
      setMin(+e.target.value)
    setMax(+e.target.value)
  }

  return (
    <div className={classes.range}>
      <input
        className={classes.number}
        value={minValue}
        onChange={handleMinValue}
        type="number"
        min="0" max="9999"
      />
      <span className={classes.space}>-</span>
      <input
        className={classes.number}
        value={maxValue}
        onChange={handleMaxValue}
        type="number"
        min="0" max="9999"
      />
    </div>
  );
};

export default RangeFilter;