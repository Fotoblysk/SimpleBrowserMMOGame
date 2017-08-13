import React, { Component } from "react";
import "./App.css";
import Banner from "./comp/Banner.jsx";
import NaviBar from "./comp/NaviBar.jsx";
import LoggingWindow from "./comp/LoggingWindow.jsx";
import RegisterWindow from "./comp/RegisterWindow.jsx";
import AboutWindow from "./comp/AboutWindow.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {clickedComponent:"", signed: true};
  }
  onNaviClick = (naviValue) => {
    this.setState({clickedComponent: naviValue});
  }
  render() {
    let mainComponent="";
    if(this.state.clickedComponent === "login")
      mainComponent=<LoggingWindow />
    else if(this.state.clickedComponent === "register")
      mainComponent=<RegisterWindow />
    else if(this.state.clickedComponent === "about")
      mainComponent=<AboutWindow />
    return (
      <div className="App">
        <Banner />
        <NaviBar stateValue={this.onNaviClick} />
        {mainComponent}
      </div>
    );
  }
}

export default App;
