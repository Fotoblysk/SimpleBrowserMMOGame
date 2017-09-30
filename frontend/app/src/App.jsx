import React, { Component } from "react";
import "./App.css";
import Banner from "./comp/Banner.jsx";
import NaviBar from "./comp/NaviBar.jsx";
import LoggingWindow from "./comp/LoggingWindow.jsx";
import RegisterWindow from "./comp/RegisterWindow.jsx";
import AboutWindow from "./comp/AboutWindow.jsx";
import HomeWindow from "./comp/HomeWindow.jsx";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./comp/Dashboard.jsx";
import { Button } from "react-bootstrap";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {signed: true};
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Banner />
          <NaviBar />
          <Route exact path="/" component={HomeWindow} />
          <Route exact path="/login" component={LoggingWindow} />
          <Route exact path="/register" component={RegisterWindow} />
          <Route exact path="/about" component={AboutWindow} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
