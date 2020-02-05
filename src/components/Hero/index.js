import React from "react";
import PropTypes from "prop-types";
import {Button, Jumbotron} from 'react-bootstrap'

function index(props) {
  return <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>;

}

index.propTypes = {};

export default index;
