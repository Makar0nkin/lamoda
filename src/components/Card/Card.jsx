import React from 'react';
import classes from "./Card.module.css";
import defImg from "../../images/defaultImage.png"

const Card = ({name, description, color, price, rating, id}) => {
  return (
    <div className={classes.card}>
      <img className={classes.cardImage} src={defImg}/>
      <div className={classes.cardName}>{name}</div>
      <div className={classes.cardDescription}>{description}</div>
      <div className={classes.cardMeta}>
        <div>Цвет</div><span>{color}</span>
        <div>Стоимость</div><span>{price}</span>
        <div>Рейтинг</div><span>{rating}</span>
      </div>
    </div>
  );
};

export default Card