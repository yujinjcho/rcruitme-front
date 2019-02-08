import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import auth from './auth';

class SignOut extends Component {

  render() {
    return (
      <Nav.Item>
        <Link to='/' onClick={auth.logOut}>Sign Out</Link>
      </Nav.Item>
    );
  }
}

export default SignOut;
