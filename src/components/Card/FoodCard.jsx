import React from "react";
import "./Card.css";

const FoodCard = ({ food, name }) => {
  return (
    <div className="food-card-container">
      <img src={food.imgSrc} alt="" />
      <div className="food-detail">
      <h3>{food.name}</h3>
      <p>
        {food.price} for {food.qty}
      </p>
      <p>{name}</p>
      </div>
    </div>
  );
};

export default FoodCard;
