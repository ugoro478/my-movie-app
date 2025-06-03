import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <Link to={`/movies/${movie.title}`}>
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-sm hover:shadow-xl transition">
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="rounded-lg w-full h-60 object-cover mb-2"
      />
      <h2 className="text-xl font-bold">{movie.title}</h2>
      <p className="text-sm text-gray-600">{movie.description}</p>
      <p className="mt-1 font-semibold">Rating: {movie.rating}</p>
    </div>
  </Link>
);

export default MovieCard;
