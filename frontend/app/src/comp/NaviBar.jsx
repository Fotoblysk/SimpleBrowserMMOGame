import React, { Component } from "react";
import "../css/NaviBar.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

class NaviBar extends Component {

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <LinkContainer eventKey={1} to={"/"}>
                  <a>Browser Game</a>
                </LinkContainer>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to={"/login"}>
                  <NavItem eventKey={2}>Login</NavItem>
                </LinkContainer>
                <LinkContainer to={"/register"}>
                  <NavItem eventKey={3}>Register</NavItem>
                </LinkContainer>
                <LinkContainer to={"/about"}>
                  <NavItem eventKey={4}>About</NavItem>
                </LinkContainer>
                <LinkContainer to={"/dashboard"}>
                  <NavItem eventKey={5}>Dashboard</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}

export default NaviBar;
