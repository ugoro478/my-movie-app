import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import MovieDetail from "./component/MovieDetail";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL:
        "https://flhsnavigator.com/wp-content/uploads/2021/10/url-4.jpeg?w=691",
      rating: 9,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "Stranger Things",
      description: "A thrilling Netflix series with supernatural events.",
      posterURL:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWPh6PeuTgtO_Zzmap6eXJrwBro7Rpz-VOBSqo_7j1-CW9rmEhD0fGArmbXSoWphgcr4ml",
      rating: 8,
      trailerLink: "https://www.youtube.com/embed/b9EkMc79ZSU",
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState("");

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    trailerLink: "",
  });

  const handleAddMovie = () => {
    if (newMovie.title && newMovie.rating) {
      setMovies([...movies, { ...newMovie, rating: Number(newMovie.rating) }]);
      setNewMovie({
        title: "",
        description: "",
        posterURL: "",
        rating: "",
        trailerLink: "",
      });
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              movies={movies}
              filterTitle={filterTitle}
              filterRate={filterRate}
              setFilterTitle={setFilterTitle}
              setFilterRate={setFilterRate}
              newMovie={newMovie}
              setNewMovie={setNewMovie}
              handleAddMovie={handleAddMovie}
            />
          }
        />
        <Route
          path="/movies/:title"
          element={<MovieDetail movies={movies} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
