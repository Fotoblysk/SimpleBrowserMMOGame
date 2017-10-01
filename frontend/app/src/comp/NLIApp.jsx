import React, { Component } from "react";
import Banner from "./Banner.jsx";
import NaviBarNLI from "./NaviBarNLI.jsx";
import LoggingWindow from "./LoggingWindow.jsx";
import RegisterWindow from "./RegisterWindow.jsx";
import AboutWindow from "./AboutWindow.jsx";
import HomeWindow from "./HomeWindow.jsx";
import {Route} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import {isLogged} from "../func/LoginTools.jsx";
import PropTypes from "prop-types";


class NLIApp extends Component {
  constructor(props) {
    super(props);
    if(isLogged())
      this.props.history.push("/li/dashboard");

    this.state = {signed: true};
  }

  render() {
    return (
        <div>
          <Banner />
          <NaviBarNLI />

          <Route exact path="/nli/" component={HomeWindow} />
          <Route exact path="/nli/login" component={LoggingWindow} />
          <Route exact path="/nli/register" component={RegisterWindow} />
          <Route exact path="/nli/about" component={AboutWindow} />
          <Route exact path="/nli/dashboard" component={Dashboard} />
        </div>
    );
  }
}

NLIApp.propTypes = {
  history: PropTypes.object.isRequired,
};

export default NLIApp;
