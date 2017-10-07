import React, { Component } from "react";
import { Col, Row } from "react-bootstrap"; 
import MapElement from "./MapElement.jsx";
import { authStore } from "../stores/authStore.jsx";

class SmallMap extends Component {
  constructor(props) {
    super(props);
    let elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.state={elements: elements};
    this.getMap();
  }

  getMap = () => {
    fetch("/api/smallmap", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tocken:  authStore.getState().jwt
      })
    }).then( (response) => {
      return response.json()
    }).then( (response) => {
      console.log(response)
    });

  }

  render() {
    return(
      <div>
      <Row style={{width: "100%"}}>
      <Col ld={4} md={4} xs={0} style={{padding: "0px"}} />
      <Col ld={8} md={8} xs={12} style={{padding: "0px"}}>
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
