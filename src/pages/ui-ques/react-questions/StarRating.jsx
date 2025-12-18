import { useState } from "react";
import "./styles/stars.styles.css";

const STARS = 5;
const ReviewStars = () => {
  const [raiting, seraiting] = useState(0);
  const [hover, sethover] = useState(0);
  console.log("rating", raiting, "hover", hover, (raiting && hover) || hover);

  return (
    <div className="container">
      {Array.from({ length: STARS }).map((i, index) => (
        <span
          key={index}
          onMouseEnter={() => sethover(index + 1)} // remember
          onMouseLeave={() => sethover(raiting)}
          onClick={() => seraiting(index + 1)} // remember
          className={`stars  ${
            index < ((raiting && hover) || hover) ? "on" : "off" // remember
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default ReviewStars;
