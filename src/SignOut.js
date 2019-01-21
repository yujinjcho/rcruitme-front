import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import auth from './auth';

class SignOut extends Component {
  logOut(e) {
    e.preventDefault();
    auth.logOut();
  };

  render() {
    return (
      <Nav.Link onClick={this.logOut.bind(this)}>
        Sign Out
      </Nav.Link>
    );
  }
}

export default SignOut;
