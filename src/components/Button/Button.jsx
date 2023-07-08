import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const Button = ({ data }) => {
  const { setRestData } = useContext(DataContext);

  return (
    <div>
      <button
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
