
import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";


export function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/movies/all/movie_reviews")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="px-6 mt-12 ml-2 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto ">
      
    {movies?.map((movie) =>
        <Movie movie={movie} key={movie.id}/>
    )}
    
    </div>
  );
}
