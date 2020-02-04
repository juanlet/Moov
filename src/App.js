import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./Navbar";
import Hero from "./Hero";
import MovieList from "./MovieList";
import Footer from "./Footer";

function App() {
  const [movieList, setMovieList] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
