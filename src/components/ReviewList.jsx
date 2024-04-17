export function ReviewList({ review }) {
  return (
    <>
      <div
        className="text-white"
        style={{ fontFamily: "Quicksand, sans-serif" }}
      >
        

        <p>{review?.description}</p>
      </div>
    </>
  );
}
