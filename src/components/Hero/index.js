import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import './Hero.scss';

function index(props) {
  return (
    <div className="hero">
      <Link to="/" style={{textDecoration: 'none'}}><div className="hero__brand">Moov</div></Link>
      <div className="hero__title"> Find your new favorites</div>
      <p className="hero__subtitle">Broaden your taste</p>
      <div className="input-group search-container">
         <input type="text" className="form-control form-control--rounded" placeholder="Search movie..." aria-label="Search" aria-describedby="movie-search" onChange={(e)=>props.setSearchTerm(e.target.value)}/>
      </div>

 
    </div>
  );
}

index.propTypes = {
  setSearchTerm: PropTypes.func
};

export default index;
