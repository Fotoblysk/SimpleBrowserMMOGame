import React, { Component } from "react";
import NaviBarLI from "./NaviBarLI.jsx";
import {Route} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import {isLogged} from "../func/LoginTools.jsx";
import PropTypes from "prop-types";
import SmallMap from "./SmallMap.jsx";


class LIApp extends Component {
  constructor(props) {
    super(props);
    if(!isLogged())
      this.props.history.push("/nli/login");

    this.state = {signed: true};
  }

  render() {
    return (
      <div className="App">
        <NaviBarLI />
        <Route exact path="/li/dashboard" component={Dashboard} />
        <Route exact path="/li/map" component={SmallMap} />
      </div>
    );
  }
}

LIApp.propTypes = {
  history: PropTypes.object.isRequired,
};

export default LIApp;
