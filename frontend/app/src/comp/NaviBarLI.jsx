import React, { Component } from "react";
import "../css/NaviBar.css";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logOut } from "../func/LoginTools.jsx";

class NaviBarLI extends Component {

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <LinkContainer eventKey={1} to={"/li"}>
                  <a>Browser Game</a>
                </LinkContainer>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to={"/li/dashboard"}>
                  <NavItem eventKey={1}>Dashboard</NavItem>
                </LinkContainer>
                <LinkContainer to={"/nli/"} onClick={logOut}>
                  <NavItem eventKey={2}>LogOut</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}

export default NaviBarLI;
