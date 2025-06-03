import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {movies.map((movie, index) => (
      <MovieCard key={index} movie={movie} />
    ))}
  </div>
);

export default MovieList;
