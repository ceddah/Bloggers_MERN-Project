import React from "react";

const Ratings = ({ rating }) => {
  const totalRating = rating.ratings.reduce((acc, item) => (acc += item), 0) / rating.votes || 0;
  return (
    rating.votes > 0 && (
      <div className="flex items-center gap-3">
        <div className="rating-outer">
          <div className="rating-inner" style={{ width: `${(totalRating / 5) * 100}%` }}></div>
        </div>
        <span className="text-sm text-gray-500">
          {totalRating} / out of 5 ({rating.votes} votes)
        </span>
      </div>
    )
  );
};

export default Ratings;
