import { useEffect, useState } from "react";

export function GetApi() {
  const [lists, setLists] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies/278/reviews")
      .then((response) => response.json())
      .then((data) => setLists(data));
  }, []);

  return (
    <div className="rounded overflow-hidden shadow-lg shadow-purple-900 w-1/4 bg-purple-400 mb-5 mt-8 ml-12">
      <div className="px-12 py-8 h-full flex flex-col justify-center">
        <h2
          className="font-bold text-2xl mb-2 text-center text-white"
          style={{
            fontFamily: "Chakra Petch, sans-serif",
            fontStyle: "italic",
          }}
        >
          Movie <i className="fa-solid fa-square-check ml-4"></i>
        </h2>

        <div
          className="font-bold text-xl text-white mb-2 mt-2"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Movie ID: {lists["movie_id"]}
        </div>

        {/* <h3 className="font-bold text-xl text-white mb-2 mt-2">Reviews:</h3>
        <div className="text-white">
          {lists.reviews &&
            lists.reviews.map((review, index) => (
              <div key={index} className="mb-2">
                <p>Review: {review.description}</p>
              </div>
            ))}
        </div> */}
      </div>
    </div>
  );
}
