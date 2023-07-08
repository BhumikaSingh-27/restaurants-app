import React from "react";
import FoodCard from "../Card/FoodCard";
import "./RestCard.css";
import { NavLink } from "react-router-dom";

const RestCard = ({ data }) => {
  return (
    <div className="restCard-container">
      <h2>{data.name}</h2>
      <div className="food-card-main">
        {data.menu.map((foodData, index) => (
          <NavLink to={`/singlePage/${data.id}`}>
            {" "}
            <div key={index}>
              <FoodCard food={foodData} name={data.name} />
            </div>{" "}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default RestCard;
