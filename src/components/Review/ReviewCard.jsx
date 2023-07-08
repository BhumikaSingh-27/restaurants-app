import React from "react";
import "./Review.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const ReviewCard = ({ user }) => {
  return (
    <div className="review-container">
      <div className="review-detail">
        <div className="user">
          {" "}
          <img src={user?.pp} alt="user pic" />{" "}
          <p>
            <b>{user?.revName}</b>
          </p>
        </div>
        <p className="user-comment">{user?.comment}</p>
      </div>
      <div>
        <div className="star"><span>{user?.rating}</span>
        <StarOutlineIcon /></div>
      </div>
    </div>
  );
};

export default ReviewCard;
