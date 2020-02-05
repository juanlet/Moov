import React from "react";
import PropTypes from "prop-types";
import MovieItem from "components/MovieItem";
import './MovieList.scss';
function index(props) {
  return (
    <div className="container">
      <div className="movie-list">
       {props.movies?props.movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      )):'No Movies to show in this range of score.'} 
      </div>
    </div>
  );
}

index.propTypes = {
  movies: PropTypes.array
};

export default index;
