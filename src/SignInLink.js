import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

class SignInLink extends Component {

  render() {
    return (
      <Nav.Item>
        <Link to='/sign-in' >Sign In</Link>
      </Nav.Item>
    );
  }
}

export default SignInLink;
