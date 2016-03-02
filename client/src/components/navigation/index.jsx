import React from 'react';
import { browserHistory } from 'react-router'
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const Navigation = React.createClass({
  navigateTo(path) {
    return function () {
      browserHistory.push(path);
    }
  },

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#" onClick={this.navigateTo('/')}>React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="#" onClick={this.navigateTo('/')}>Home</NavItem>
          <NavItem href="#" onClick={this.navigateTo('/new')}>New Blog</NavItem>
        </Nav>
      </Navbar>
    )
  }
});

export default Navigation;
