import React from "react";
import "./Ratings.scss";
import { NO_OF_RATINGS } from "../../core/constants/core-constants";

const Ratings: React.FC<{ rate: number; raters?: number }> = ({
  rate,
  raters,
}) => {
  const arr = new Array(NO_OF_RATINGS).fill(0);
  return (
    <>
      <span>
        {arr.map((x, index) => {
          return (
            <i
              className="bi bi-star-fill rating"
              style={{ color: index <= rate - 1 ? "#fdd33d" : "#cdccc8" }}
            ></i>
          );
        })}
      </span>
      {raters && <span className="raters">&nbsp;({raters})</span>}
    </>
  );
};

export default Ratings;
