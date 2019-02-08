import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SignOut from './SignOut';
import CreateAccount from './CreateAccount';
import auth from './auth';

class Navigation extends Component {

  render() {

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Rcruitme</Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          {auth.loggedIn() ? <SignOut /> : <CreateAccount />}
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
