// StarRating.tsx
import React from "react";

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasPartialStar = rating - fullStars > 0;
  const partialFillPercentage = Math.round((rating - fullStars) * 100); // e.g., 90% for 3.9
  const emptyStars = 5 - fullStars - (hasPartialStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {/* Render full stars */}
      {Array.from({ length: fullStars }, (_, i) => (
        <svg
          key={`full-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-yellow-500 transition-colors duration-500 hover:text-yellow-600 w-6 h-6"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}

      {/* Render partially filled star if needed */}
      {hasPartialStar && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-yellow-500 transition-colors duration-500 hover:text-yellow-600  relative"
        >
          <defs>
            <clipPath id="partial-clip">
              <rect width={`${partialFillPercentage}%`} height="100%" />
            </clipPath>
          </defs>
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="currentColor"
            clipPath="url(#partial-clip)"
          />
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="none"
            stroke="currentColor"
            className="text-gray-300"
          />
        </svg>
      )}

      {/* Render empty stars */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <svg
          key={`empty-${i}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-6 h-6 text-gray-300"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
