import React from "react";
import PropTypes from "prop-types";
import MovieItem from "components/MovieItem";
import './MovieList.scss';
function index(props) {
  return (
    <div className="container">
      <div className="movie-list">
       {props.movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))} 
      </div>
    </div>
  );
}

index.propTypes = {};

export default index;
