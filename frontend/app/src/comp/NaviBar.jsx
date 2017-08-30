import React, { Component } from "react";
import "../css/NaviBar.css";
import { Link } from "react-router-dom";

class NaviBar extends Component {

  render() {
    return (
      <div className="navi-bar">
        &nbsp;
        <Link to={"/"} className="supress-link-style inline">
          <span className="link">Home</span>
        </Link>
        &nbsp;
        <Link to={"/login"} className="supress-link-style inline">
          <span className="link">Login</span>
        </Link>
        &nbsp;
        <Link to={"/register"} className="supress-link-style inline">
          <span className="link">Register</span>
        </Link>
        &nbsp;
        <Link to={"/about"} className="supress-link-style inline">
          <span className="link">About</span>
        </Link> 
        &nbsp;
      </div>
    );
  }
}

export default NaviBar;
