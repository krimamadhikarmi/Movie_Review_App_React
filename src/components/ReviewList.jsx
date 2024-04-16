import React, { useEffect, useState } from "react";
export function ReviewList({ movieId }) {
  const [lists, setLists] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/movies/${movieId}/reviews`)
      .then((response) => response.json())
      .then((data) => setLists(data));
  }, [movieId]);
  return (
    <>
      <div
        className="text-white"
        style={{ fontFamily: "Quicksand, sans-serif" }}
      >
        <p className="font-bold">Review Count: {lists.review_count}</p>

        <h3 className="font-bold text-xl text-white mb-4 mt-2 text-center">
          Reviews
        </h3>
        {lists.reviews && lists.reviews.length > 0 ? (
          lists.reviews.map((review, index) => (
            <div key={index} className="mb-2">
              <p>{review.description}</p>
            </div>
          ))
        ) : (
          <div className="font-bold mb-4 text-center">No reviews yet</div>
        )}
      </div>
    </>
  );
}
