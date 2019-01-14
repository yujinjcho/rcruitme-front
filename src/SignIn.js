import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Alert from 'react-bootstrap/lib/Alert';
import Container from 'react-bootstrap/lib/Container';

import auth from './auth';
import capitalize from './capitalize';
import formFields from './signInFormFields';
import formFrom from './formFrom';

const SignInForm = formFrom(formFields);

class SignIn extends Component {
  state = {
    loggedIn: false,
    providers: [],
    error: ''
  };

  componentDidMount() {
    fetch('/sign-in')
      .then(res => res.json())
      .then(data => this.setState(data));
  }

  handleSuccess = (_, res) => {
    auth.save(res);
    this.setState({ loggedIn: true });
  };

  handleError = error =>
    this.setState({ error });

  render() {
    const { loggedIn, providers, error } = this.state;

    if (loggedIn) return <Redirect to="/" />;

    return (
      <Container>
        <h1>Sign In</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <SignInForm
          endpoint="/sign-in"
          onSuccess={this.handleSuccess}
          onError={this.handleError}
          hideInvalid
        />
        <br />
        <h3>Existing Account Sign-In</h3>
        {providers.map(({ id, href }) => (
          <div key={id}>
            <a href={`${href}?redirect=${window.location.origin}`} className={`provider ${id}`}>
              {capitalize(id)} login
            </a>
          </div>
        ))}
      </Container>
    );
  }
}

export default SignIn;
