import React, { useContext } from "react";
import { cuisineData } from "../data/data";
import Button from "../components/Button/Button";
import "./Page.css";
import { DataContext } from "../contexts/DataContext";
import RestCard from "../components/ResCard/RestCard";

const Home = () => {
  const { showRestData } = useContext(DataContext);
  console.log(showRestData);
  return (
    <div>
      <h1>Food Ordering App</h1>

      <h2>Select Your Cuisine:</h2>
      <div className="cuisine-type">
        {cuisineData.map((ele) => (
          <Button data={ele} />
        ))}
      </div>
      <div>
        {showRestData.map((data) => (
          <div>
            <RestCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
