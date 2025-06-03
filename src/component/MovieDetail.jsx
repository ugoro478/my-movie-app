import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  if (!movie) return <Navigate to="/" />;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
      <p className="mb-2">{movie.description}</p>
      <p className="mb-4">Rating: {movie.rating}</p>
      <iframe
        width="100%"
        height="400"
        src={movie.trailerLink}
        title={movie.title}
        allowFullScreen
        className="rounded-lg mb-4"
      ></iframe>
      <Link to="/" className="text-blue-600 underline">
        ← Back to Home
      </Link>
    </div>
  );
};

export default MovieDetail;
