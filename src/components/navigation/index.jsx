import React from 'react';
import { Link } from 'react-router'
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const Navigation = React.createClass({
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="#">Home</NavItem>
          <NavItem href="#/new">Add Blog</NavItem>
        </Nav>
      </Navbar>
    )
  }
});

export default Navigation;
