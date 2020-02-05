import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import './MovieItem.scss';

function index(props) {
  const {vote_average,poster_path,title,overview,id} = props.movie;
  return (
    <div className="card movie-card">
      <div class="movie-card__score">{vote_average}</div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}
`}
       className="movie-card__image"
        alt="Logo"
      />
      <div className="overlay">
         <div className="overlay__container">
         <div className="overlay__title">{title}</div>
         <div className="overlay__text">{`${overview.substring(0,150)}...`}</div>
         <Link to={{
          pathname: '/details',
          state: {
            movieId: id
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
