import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import auth from './auth';

class SignOut extends Component {

  logOut() {
    auth.logOut();
    this.props.history.push('/');
  };

  render() {
    return (
      <Nav.Item>
        <Link to='/' onClick={this.logOut}>Sign Out</Link>
      </Nav.Item>
    );
  }
}

export default SignOut;
