import { useEffect, useState } from "react";

export function GetApi() {
  const [movies, setMovies] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies/129/reviews")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="rounded overflow-hidden shadow-lg shadow-purple-900 w-2/4 bg-purple-400 mb-5  ml-12">
      <div className="px-12 py-8 h-full flex flex-col justify-center">
        <h2
          className="font-bold text-2xl mb-2 text-center text-white"
          style={{
            fontFamily: "Chakra Petch, sans-serif",
            fontStyle: "italic",
          }}
        >
          {movies["movie_title"]} 
        </h2>

        <div
          className="font-bold text-xl text-white mb-2 mt-2"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Movie ID: {movies["movie_id"]} <br/>
          Original Title: {movies["original_title"]}
        </div>

        <h3 className="font-bold text-xl text-white mb-2 mt-2">Reviews:</h3>
        <div className="text-white">
          {movies.reviews &&
            movies.reviews.map((review, index) => (
              <div key={index} className="mb-2">
                <p>User: {review.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
