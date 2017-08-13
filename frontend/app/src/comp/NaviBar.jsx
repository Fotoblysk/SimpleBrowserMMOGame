import React, { Component } from "react";
import "../css/NaviBar.css";
import PropTypes from "prop-types";

class NaviBar extends Component {
  static propTypes = {
    stateValue: PropTypes.func
  };
  onHomeClick = () => {
    this.props.stateValue("home");
  }

  onLoginClick = () => {
    this.props.stateValue("login");
  }

  onRegisterClick = () => {
    this.props.stateValue("register");
  }

  onAboutClick = () => {
    this.props.stateValue("about");
  }

  render() {
    return (
      <div className="navi-bar">
        &nbsp;
        <div className="inline" onClick={this.onHomeClick}>
          <span className="link">Home</span>
        </div>
        &nbsp;
        <div className="inline" onClick={this.onLoginClick}>
          <span className="link">Login</span>
        </div>
        &nbsp;
        <div className="inline" onClick={this.onRegisterClick}>
          <span className="link">Register</span>
        </div>
        &nbsp;
        <div className="inline" onClick={this.onAboutClick}>
          <span className="link">About</span>
        </div> 
        &nbsp;
      </div>
    );
  }
}

export default NaviBar;
