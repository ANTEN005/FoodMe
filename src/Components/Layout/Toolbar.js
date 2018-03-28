import React, { Component } from "react";
import { Link } from "react-router-dom";
import {  Nav, Navbar, NavItem } from "react-bootstrap";
import "./Toolbar.css";
import { LinkContainer } from "react-router-bootstrap";

class toolbar extends Component {
  render() {
    return (
      <div className="Toolbar container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">FoodMe</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
                <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default toolbar;