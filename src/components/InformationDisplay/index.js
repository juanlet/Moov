import React from 'react';
import PropTypes from 'prop-types';
import './InformationDisplay.scss';
const index = props => {
    return (
        <div className="information-message">
            <span>{props.message}</span>
        </div>
    )
}

index.propTypes = {
  message: PropTypes.string
}

export default index
