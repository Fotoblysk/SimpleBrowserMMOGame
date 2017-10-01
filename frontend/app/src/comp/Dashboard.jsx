import React, { Component } from "react";
import { withRouter } from "react-router";

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        You are logged.
      </div>
    );
  }
}


export default withRouter(Dashboard);
