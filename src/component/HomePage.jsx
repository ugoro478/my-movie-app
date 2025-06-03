import React from "react";
import Filter from "./Filter"; // Ensure path is correct
import MovieList from "./MovieList"; // Ensure path is correct

const HomePage = ({
  movies,
  filterTitle,
  filterRate,
  setFilterTitle,
  setFilterRate,
  newMovie,
  setNewMovie,
  handleAddMovie,
}) => {
  const filteredMovies = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRate === "" || m.rating >= Number(filterRate))
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 My Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        filterRate={filterRate}
        setFilterTitle={setFilterTitle}
        setFilterRate={setFilterRate}
      />

      <div className="mb-6 flex flex-col gap-4 sm:grid sm:grid-cols-5">
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
          className="p-2 border rounded-md"
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Trailer Link"
          value={newMovie.trailerLink}
          onChange={(e) =>
            setNewMovie({ ...newMovie, trailerLink: e.target.value })
          }
          className="p-2 border rounded-md"
        />
        <button
          onClick={handleAddMovie}
          className="col-span-5 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Add Movie
        </button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default HomePage;
