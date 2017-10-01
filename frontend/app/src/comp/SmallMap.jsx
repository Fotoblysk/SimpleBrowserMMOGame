import React, { Component } from "react";
import { Col, Row } from "react-bootstrap"; 
import MapElement from "./MapElement.jsx";
class SmallMap extends Component {
  constructor(props) {
    super(props);
    let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.state={elements: elements};
  }

  render() {
    return(
      <div>
      <Row>
      <Col ld={4} md={4} xs={0} />
      <Col ld={8} md={8} xs={12}>
          {this.state.elements.map((x, i) =>
          <div key={i}>
            {this.state.elements.map((xx, ii) =>
              <MapElement key={ii} w={this.state.elements.length}/>
            )}
          </div>
          )}
      </Col>
      </Row>
      </div>
    );
  }
}

export default SmallMap;
