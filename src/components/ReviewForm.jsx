import { useState } from "react";


export function ReviewForm({addReview}) {
  const [newreview, setNewReview] = useState("");
  

  return (
    <>
    <form>
      <div className="flex mt-10 ml-4">
        <div>
          <input
            type="text"
            value={newreview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Enter Your Review"
            className="w-64 text-black px-2 py-2 mb-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="ml-4 mr-4 mb-2 flex items-center">
          {/* <Button text={"Save"} /> */}
          <button  className="px-4 py-2 text-white bg-black hover:bg-black focus:outline-none rounded-md"
      style={{ fontFamily: "Ojuju, sans-serif" }} onClick={(e) => addReview(e,newreview,setNewReview)}>Save</button>
        </div>

      </div>
    </form>
    </>
    
  );
}
