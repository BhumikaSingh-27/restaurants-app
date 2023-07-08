import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import "./Button.css";

const Button = ({ data }) => {
  const { setRestData } = useContext(DataContext);

  return (
    <div>
      <button
        className="cta-btn"
        onClick={() => {
          setRestData(data.id);
        }}
      >
        {data.name}
      </button>
    </div>
  );
};

export default Button;
