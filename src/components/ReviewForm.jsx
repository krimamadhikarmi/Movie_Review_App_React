import { useState } from "react";
import { Button } from "./Button";

export function ReviewForm({movieId}) {
  const [review, setReview] = useState("");
  const [addnew,setAddNew]= useState([]);
  // const [movieId, setMovieId] = useState("");


  // function addNewReview(){
  //   setAddNew([...addnew,review])
  // }

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
        // setMovieId("");
        setAddNew(...addnew,review)
        
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
      <div className="flex mt-10 ml-4">
        <div>
          {/* <input
                type="text"
                value={movieId}
                onChange={(e) => handleChange(e, setMovieId)}
                placeholder="Enter Movie ID"
                className="w-64 px-4 py-2 mb-2 mt-6 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
              /> */}
          <input
            type="text"
            value={review}
            onChange={(e) => handleChange(e, setReview)}
            placeholder="Enter Your Review"
            className="w-64 text-black px-2 py-2 mb-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="ml-4 mr-4 mb-2 flex items-center">
          <Button text={"Save"} />
        </div>

      </div>
    </form>
  );
}
