import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import ReviewCard from "../components/Review/ReviewCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SinglePage = () => {
  const { data, restIdReview, setIsModal } = useContext(DataContext);
  const { restId } = useParams();

  const findData = data.find(({ id }) => id.toString() === restId);
  console.log(findData);

  return (
    <div className="rest-review-container">
      <NavLink className="not-link" to="/">
        {" "}
        <div>
          <ArrowBackIcon />
        </div>
      </NavLink>
      <div className="single-review">
        <div className="single-container">
          <div className="resturant-data">
            <h1>{findData?.name}</h1>
            <div className="detail">
              {findData?.menu?.reduce(
                (acc, cur) => [...acc, cur.name, ","],
                []
              )}
            </div>
            <div className="detail">{findData?.address}</div>
          </div>
          <button
            className="cta-btn"
            onClick={() => {
              setIsModal(true);
              restIdReview.current = restId;
            }}
          >
            Review
          </button>
        </div>
        <h2 style={{ textAlign: "start" }}>Reviews</h2>
        <div>
          {findData?.ratings?.map((rev, index) => (
            <div key={index}>
              <ReviewCard user={rev} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
