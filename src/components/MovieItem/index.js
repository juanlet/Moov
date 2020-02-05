import React from "react";
import PropTypes from "prop-types";
import './MovieItem.scss';

function index(props) {
  return (
    <div className="card movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}
`}
       className="movie-card__image"
        alt="Logo"
      />
      <div>{props.movie.title}</div>
      {/* <div>{props.movie.overview}</div> */}
    </div>
  );
}

index.propTypes = {};

export default index;
