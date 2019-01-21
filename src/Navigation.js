import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SignOut from './SignOut';

class Navigation extends Component {

  render() {

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Rcruitme</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <SignOut />
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
