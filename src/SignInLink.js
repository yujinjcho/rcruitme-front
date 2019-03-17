import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

class SignInLink extends Component {

  render() {
    return (
      <Nav.Link href='/sign-in' >
        Sign In
      </Nav.Link>
    );
  }
}

export default SignInLink;
