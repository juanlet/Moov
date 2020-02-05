import React from "react";
import PropTypes from "prop-types";
import './Hero.scss';

function index(props) {
  return (
    <div className="hero">
      <div className="hero__brand">Moov</div>
      <div className="hero__title"> Find your new favorites</div>
      <p className="hero__subtitle">Broaden your taste</p>
      <div className="input-group search-container">
         <input type="text" className="form-control form-control--rounded" placeholder="Search movie..." aria-label="Search" aria-describedby="movie-search"/>
      </div>

 
    </div>
  );
}

index.propTypes = {};

export default index;
