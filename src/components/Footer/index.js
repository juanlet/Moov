import React from "react";
import PropTypes from "prop-types";
import  './Footer.scss';
function index(props) {
  return <div className="footer">
  <div className="input-group newsletter">
        <span class="newsletter__subtitle">Subscribe to our newsletter</span>

         <input type="text" className="form-control" placeholder="Email" aria-label="Search" aria-describedby="movie-search"/>
         <div class="newsletter__subscribe-btn">Subscribe</div>
  </div>
  <div className="copyright">
   © 2020 Moove
  </div>
  </div>;
}

index.propTypes = {};

export default index;
