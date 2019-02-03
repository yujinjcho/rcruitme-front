import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Alert from 'react-bootstrap/lib/Alert';
import Container from 'react-bootstrap/lib/Container';
import { parse } from 'qs';

import auth from './auth';
import capitalize from './capitalize';
import formFields from './signInFormFields';
import formFrom from './formFrom';

const SignInForm = formFrom(formFields);

class SignIn extends Component {
  state = {
    loggedIn: auth.loggedIn(),
    providers: [],
    error: ''
  };

  endPoint() {
    const baseUrl = "/sign-in";
    const { redirect } = parse(window.location.search, { ignoreQueryPrefix: true });
    return redirect ? `${baseUrl}?redirect=${redirect}` : baseUrl;
  };

  socialRedirect() {
    const { redirect } = parse(window.location.search, { ignoreQueryPrefix: true });
    return redirect ? `&jobRedirect=${redirect}` : "";
  };

  componentDidMount() {
    fetch('/sign-in')
      .then(res => res.json())
      .then(data => this.setState(data));
  }

  handleSuccess = (data, res) => {
    auth.saveFromHeaders(res.headers);

    if (data.redirect) {
      window.location = data.redirect;
    };
    this.setState({ loggedIn: auth.loggedIn() });
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
          endpoint= {this.endPoint()}
          onSuccess={this.handleSuccess}
          onError={this.handleError}
          hideInvalid
        />
        <br />
        <h3>Existing Account Sign-In</h3>
        {providers.map(({ id, href }) => (
          <div key={id}>
            <a href={`${href}?redirect=${window.location.origin}/auth${this.socialRedirect()}`} className={`provider ${id}`}>
              {capitalize(id)} login
            </a>
          </div>
        ))}
      </Container>
    );
  }
}

export default SignIn;
