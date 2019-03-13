import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
import CreateAccount from './CreateAccount';
import auth from './auth';

class Navigation extends Component {

  render() {

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to='/' >Rcruitme</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>


        <Nav>
          { !auth.loggedIn() && <CreateAccount /> }
          {auth.loggedIn() ? <SignOutLink /> : <SignInLink />}
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
