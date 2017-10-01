import React, { Component } from "react";
import "../css/NaviBar.css";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class NaviBar extends Component {

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <LinkContainer to={"/nli"}>
                  <a>Browser Game</a>
                </LinkContainer>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to={"/nli/login"}>
                  <NavItem eventKey={2}>Login</NavItem>
                </LinkContainer>
                <LinkContainer to={"/nli/register"}>
                  <NavItem eventKey={3}>Register</NavItem>
                </LinkContainer>
                <LinkContainer to={"/nli/about"}>
                  <NavItem eventKey={4}>About</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}

export default NaviBar;
