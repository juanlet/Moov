import React from "react";
import PropTypes from "prop-types";

function index(props) {
  return (
    <div className>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}
`}
        alt="Logo"
      />
      <div>{props.movie.title}</div>
      <div>{props.movie.overview}</div>
    </div>
  );
}

index.propTypes = {};

export default index;
