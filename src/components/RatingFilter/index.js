import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';
import './RatingFilter.scss';

const index = props => {
    return (
        <div className="filterBar">
            <StarRatingComponent
            name={"rating"} /* name of the radio input, it is required */
            value={props.rating} /* number of selected icon (`0` - none, `1` - first) */
            starCount={5} /* number of icons in rating, default `5` */
            onStarClick={props.onStarClick}
        />
        </div>
    )
}

index.propTypes = {
   onStarClick:PropTypes.func,
   rating : PropTypes.number
}

export default index
