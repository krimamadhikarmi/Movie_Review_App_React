
import { ReviewForm } from "./ReviewForm";
import { ReviewList } from "./ReviewList";

export function Movie({ movies }) {
  return (
    <div className="px-6 mt-12 ml-2 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto ">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg mb-6 shadow-md shadow-white relative"
          style={{ minHeight: "300px", display: "flex", flexDirection: "column" }}
        >
          <div className="p-4 flex-grow">
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
           
            <div className="mb-4 overflow-auto">
              <ReviewList movieId={movie.mid} movie={movie}/>
            </div>
          </div>
          <div className="p-4">
            <ReviewForm movieId={movie.mid} />
          </div>
          
        </div>
      ))}
    </div>
  );
}
