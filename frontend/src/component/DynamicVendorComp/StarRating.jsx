import React from "react";

const StarRating = ({ rating, onChange }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
      <div className="flex items-center">
        {stars.map((star) => (
          <svg
            key={star}
            className={`h-5 w-5 fill-current ${
              star <= rating ? "text-yellow-500" : "text-gray-400"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={() => onChange(star)}
          >
            <path
              fillRule="evenodd"
              d="M10 1l2.932 6.764H19.54l-5.628 4.76 2.353 6.87L10 14.417l-6.264 4.977 2.353-6.87L.46 7.764h6.608L10 1z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
  );
};

export default StarRating;
