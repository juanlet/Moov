import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "components/Navbar";
import Hero from "components/Hero";
import MovieList from "components/MovieList";
import Footer from "components/Footer";

function App() {
  const [movieList, setMovieList] = useState([]);

  const fetchMovies = async () => {
    try {
      let movies = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc`
      );
      movies = await movies.json();
      console.log(movies);
      setMovieList(movies.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      {movieList ? (
        <MovieList movies={movieList} />
      ) : (
        "There was an error fetching the movies"
      )}
      <Footer />
    </div>
  );
}

export default App;
