import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';

import auth from './auth';

class SignOut extends Component {

  componentDidMount() {
    auth.removeFromHeader();
  }

  render() {
    return (
      <Container>
        <h1>Sign Out</h1>
        <h3>You've been signed out</h3>
      </Container>
    );
  }
}

export default SignOut;
