import { useState } from "react";
import { Button } from "./Button";
export function ReviewForm() {
  const [review, setReview] = useState("");
  const [movieId, setMovieId] = useState("");

  function addReview() {
    const body = {
      review: {
        description: review,
      },
    };

    fetch(`http://localhost:3000/api/v1/movies/${movieId}/reviews`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "default",
    }).then((response) => {
      if (response.ok) {
        setMovieId("");
        setReview("");
      }
    });
  }
  function handleChange(event, setStateFunction) {
    setStateFunction(event.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        addReview();
      }}
    >
      <div className="flex justify-center mt-4 mx-auto">
        <div className="rounded overflow-hidden shadow-lg shadow-sky-900 bg-sky-300 mb-5 w-2/6 ml-14 mt-12">
          <div className="px-6 py-8 h-full flex">
            <div className="mt-2 ml-5">
              <input
                type="text"
                value={movieId}
                onChange={(e) => handleChange(e, setMovieId)}
                placeholder="Enter Movie ID"
                className="w-64 px-4 py-2 mb-2 mt-6 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                value={review}
                onChange={(e) => handleChange(e, setReview)}
                placeholder="Enter Your Review"
                className="w-64 px-4 py-2 mb-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="ml-6 mr-4 flex items-center">
              <Button 
              color={"blue"} 
              text={"Save"} 
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
