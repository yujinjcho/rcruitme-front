import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import query from './query';

class CreateAccount extends Component {

  render() {
    const { redirect } = query.parameters();
    const baseUrl = "/sign-up"
    const url = redirect ? `${baseUrl}?redirect=${redirect}` : baseUrl;
    return (
      <Nav.Item className="px-3">
        <Link to={url}>Create Account</Link>
      </Nav.Item>
    );
  }
}

export default CreateAccount;
