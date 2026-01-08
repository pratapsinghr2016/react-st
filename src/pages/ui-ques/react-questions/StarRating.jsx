import { useState } from "react";
import "./styles/star-rating.css";

const STARS = 10;
const StarRatingComponent = () => {
  const [clickedRating, setClickedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="star-container">
      {Array.from({ length: STARS }).map((i, index) => (
        <span
          key={index}
          className={`${(index < clickedRating && hoverRating===0) || (index < hoverRating)  ? "star":"star-default"}`}
          onClick={()=>setClickedRating(index+1)}
          onMouseEnter={()=>setHoverRating(index+1)}
          onMouseLeave={()=>setHoverRating(0)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRatingComponent;
