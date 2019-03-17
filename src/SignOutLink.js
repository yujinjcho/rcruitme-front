import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import auth from './auth';

class SignOutLink extends Component {

  handleLogOut() {
    auth.logOut();
    this.props.history.push('/');
  };

  render() {
    return (
      <Nav.Link href='/' onClick={this.handleLogOut} >
        Sign Out
      </Nav.Link>
    );
  }
}

export default SignOutLink;
