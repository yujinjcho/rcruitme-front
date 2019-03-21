import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import query from './query';

class CreateAccount extends Component {

  signUpHandler = (url) => () => this.props.history.push(url);

  render() {
    const { redirect } = query.parameters();
    const baseUrl = "/sign-up"
    const url = redirect ? `${baseUrl}?redirect=${redirect}` : baseUrl;
    return (
      <Nav.Link href="#" onClick={ this.signUpHandler(url) } >
        Create Account
      </Nav.Link>
    );
  }
}

export default withRouter(CreateAccount);
