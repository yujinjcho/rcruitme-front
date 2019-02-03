import { parse } from 'qs';
import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class CreateAccount extends Component {
  signUp(e) {
    e.preventDefault();

    const { redirect } = parse(window.location.search, { ignoreQueryPrefix: true });

    const baseUrl = "/sign-up"
    const url = redirect ? `${baseUrl}?redirect=${redirect}` : baseUrl;
    window.location = window.location.origin + url;
  };

  render() {
    return (
      <Nav.Link onClick={this.signUp.bind(this)} href="/sign-up">
        Create Account
      </Nav.Link>
    );
  }
}

export default CreateAccount;
