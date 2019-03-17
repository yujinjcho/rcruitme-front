import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
import CreateAccount from './CreateAccount';
import auth from './auth';

class Navigation extends Component {

  render() {

    return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          Rcruitme
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            { !auth.loggedIn() && <CreateAccount /> }
            {auth.loggedIn() ? <SignOutLink /> : <SignInLink />}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default Navigation;
