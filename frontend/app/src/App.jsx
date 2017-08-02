import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Banner from './comp/Banner.jsx';
import NaviBar from './comp/NaviBar.jsx';
import LoggingWindow from './comp/LoggingWindow.jsx';
import RegisterWindow from './comp/RegisterWindow.jsx';
import AboutWindow from './comp/AboutWindow.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {clickedComponent:""};
  }
  onNaviClick = (naviValue) => {
    this.setState({clickedComponent: naviValue});
  }
  render() {
    let mainComponent="";
    if(this.state.clickedComponent == "login")
      mainComponent=<LoggingWindow />
    if(this.state.clickedComponent == "register")
      mainComponent=<RegisterWindow />
    if(this.state.clickedComponent == "about")
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
