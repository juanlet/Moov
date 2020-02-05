import React from "react";
import PropTypes from "prop-types";
import MovieItem from "components/MovieItem";
function index(props) {
  return (
    <div>
      {props.movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

index.propTypes = {};

export default index;
