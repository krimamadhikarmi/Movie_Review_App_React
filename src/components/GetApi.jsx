import React, { useEffect, useState } from "react";
import { ReviewForm } from "./ReviewForm";
import { ReviewDisplay } from "./ReviewDisplay";

export function GetApi() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies/all/movie_reviews")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="px-6 mt-12 ml-2  grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-3 gap-6 overflow-y-auto ">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg mb-6 shadow-md shadow-white"
        >
          <div className="p-4">
            <div
              className="font-normal text-white mb-1"
              style={{ fontFamily: "Quicksand, sans-serif" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster}`}
                alt={movie.movie_title}
                className="w-full h-auto mb-2 rounded-lg"
              />
              <h2 className="font-bold text-xl mb-2 text-white text-center">
                {movie.title}
              </h2>
              <p className="mb-2">
                <strong>Movie ID:</strong> {movie.mid}
              </p>
              <p className="mb-2">
                <strong>Original Title:</strong> {movie.original_title}
              </p>
              <p className="mb-2">
                <strong>Release Date: </strong>
                {movie.release_date}
              </p>
              <p className="mb-2">
                <strong>Budget: </strong>
                {movie.budget}
              </p>
              <p className="mb-2">
                <strong>Popularity: </strong>
                {movie.popularity}
              </p>
              <p className="text-justify mb-4">
                <strong>Overview:</strong> <br/>{movie.overview}
              </p>
              <hr />
              <ReviewDisplay movieId={movie.mid} />
              <hr />
              <ReviewForm movieId={movie.mid} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
