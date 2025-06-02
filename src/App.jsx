import React, { useState } from "react";

// MovieCard Component
const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-sm">
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="rounded-lg w-full h-60 object-cover mb-2"
      />
      <h2 className="text-xl font-bold">{movie.title}</h2>
      <p className="text-sm text-gray-600">{movie.description}</p>
      <p className="mt-1 font-semibold">Rating: {movie.rating}</p>
    </div>
  );
};

// MovieList Component
const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

// Filter Component
const Filter = ({ filterTitle, filterRate, setFilterTitle, setFilterRate }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-4">
      <input
        type="text"
        placeholder="Filter by title"
        value={filterTitle}
        onChange={(e) => setFilterTitle(e.target.value)}
        className="p-2 border rounded-md w-full sm:w-1/2"
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filterRate}
        onChange={(e) => setFilterRate(e.target.value)}
        className="p-2 border rounded-md w-full sm:w-1/2"
      />
    </div>
  );
};

// App Component
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL:
        "https://flhsnavigator.com/wp-content/uploads/2021/10/url-4.jpeg?w=691",
      rating: 9,
    },
    {
      title: "Stranger Things",
      description: "A thrilling Netflix series with supernatural events.",
      posterURL:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWPh6PeuTgtO_Zzmap6eXJrwBro7Rpz-VOBSqo_7j1-CW9rmEhD0fGArmbXSoWphgcr4ml",
      rating: 8,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState("");

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleAddMovie = () => {
    if (newMovie.title && newMovie.rating) {
      setMovies([...movies, { ...newMovie, rating: Number(newMovie.rating) }]);
      setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
    }
  };

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

      <div className="mb-6 flex flex-col gap-4 sm:grid sm:grid-cols-4">
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
        <button
          onClick={handleAddMovie}
          className="col-span-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Add Movie
        </button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
