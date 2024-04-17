import { useEffect, useState } from "react";
import { ReviewForm } from "./ReviewForm";
import { ReviewList } from "./ReviewList";

export function Movie({ movie }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (movie?.reviews?.length > 0) {
      setReviews(movie.reviews);
    }
  }, [movie]);

  function addReview(e, reviewText, setNewReview) {
    e.preventDefault();
    const body = {
      review: {
        description: reviewText,
      },
    };

    fetch(`http://localhost:3000/api/v1/movies/${movie?.mid}/reviews`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "default",
    }).then((response) => {
      if (response.ok) {
        // setMovieId("");

        setReviews([
          ...reviews,
          {
            description: reviewText,
          },
        ]);
        setNewReview("");
      }
    });
  }

  return (
   
      <div
        key={movie.id}
        className="border border-gray-300 rounded-lg mb-6 shadow-md shadow-white relative"
        style={{
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="p-4 flex-grow">
          <div
            className="font-normal text-white mb-1"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster}`}
              alt={movie.title}
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
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p className="mb-2">
              <strong>Budget:</strong> {movie.budget}
            </p>
            <p className="mb-2">
              <strong>Popularity:</strong> {movie.popularity}
            </p>
            <p className="text-justify mb-4">
              <strong>Overview:</strong> <br />
              {movie.overview}
            </p>
          </div>
          <hr />

          <div
            className="mb-4 overflow-auto text-white"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            <p className="font-bold">Review Count: {reviews?.length}</p>
            <h3 className="font-bold text-xl text-white mb-4 mt-2 text-center">
              Reviews
            </h3>
            {reviews?.map((review) => (
              <ReviewList review={review} key={review?.id} />
            ))}
          </div>
        </div>
        <div className="p-4">
          <ReviewForm addReview={addReview} />
        </div>
      </div>
    
  );
}
