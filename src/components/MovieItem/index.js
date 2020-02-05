import React from "react";
import { Link } from 'react-router-dom';
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
      <div className="overlay">
         <div className="overlay__container">
         <div className="overlay__title">{props.movie.title}</div>
         <div className="overlay__text">{`${props.movie.overview.substring(0,130)}...`}</div>
         <Link to={{
          pathname: '/details',
          state: {
            movieId: props.movie.id
          }
}}><div className="btn btn-primary overlay__see-more-btn">See more</div></Link>
         </div>
      </div>
    </div>
  );
}

index.propTypes = {
  movie: PropTypes.object
};

export default index;
