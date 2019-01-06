import React, { Component } from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import Container from 'react-bootstrap/lib/Container';

import capitalize from './capitalize';
import SignInForm from './SignInForm';

class SignIn extends Component {
  state = {
    providers: [],
    error: ''
  };

  componentDidMount() {
    fetch('/sign-in')
      .then(res => res.json())
      .then(data => this.setState(data));
  }

  handleError = error =>
    this.setState({ error });

  render() {
    return (
      <Container>
        <h1>Sign In</h1>
        {this.state.error && <Alert variant="danger">{this.state.error}</Alert>}
        <SignInForm onError={this.handleError} />
        <br />
        <h3>Existing Account Sign-In</h3>
        {this.state.providers.map(({ id, href }) => (
          <div key={id}>
            <a href={href} className={`provider ${id}`}>
              {capitalize(id)} login
            </a>
          </div>
        ))}
      </Container>
    );
  }
}

export default SignIn;
