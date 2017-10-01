import React, { Component } from "react";
import { Image } from "react-bootstrap";
import test from "./test.png"
import PropTypes from "prop-types";

class MapElement extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image src={test} style={{width: 100/this.props.w + "%"}}/>
    );
  }
}

MapElement.propTypes = {
  w: PropTypes.int,
  key: PropTypes.int
};

export default MapElement;
