import React, { Component } from "react";
import isLogged from "../func/LoginTools.jsx";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

class Dashboard extends Component {

  constructor(props) {
    super(props);
    if(!isLogged()){
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>
        You are logged.
      </div>
    );
  }
}

Dashboard.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Dashboard);
