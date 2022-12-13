import React from 'react';
import classes from "./TotalGoods.module.css";

const TotalGoods = ({children}) => {
  return (
    <div className={classes.totalGods}>
      Всего товаров: {children}
    </div>
  );
};

export default TotalGoods;