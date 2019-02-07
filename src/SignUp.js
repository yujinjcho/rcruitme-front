import React, { Component } from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import Container from 'react-bootstrap/lib/Container';

import formFields from './signUpFormFields';
import formFrom from './formFrom';
import query from './query';

const SignUpForm = formFrom(formFields);

class SignUp extends Component {
  state = {
    message: '',
    error: ''
  };

  redirectUrl() {
    const { redirect } = query.parameters();
    return redirect ? redirect : window.location.origin;
  };

  handleMessage = type => message =>
    this.setState({ [type]: message });

  render() {
    return (
      <Container>
        <h1>Sign Up</h1>
        {this.state.message && <Alert variant="success">{this.state.message}</Alert>}
        {this.state.error && <Alert variant="danger">{this.state.error}</Alert>}
        <SignUpForm
          endpoint={"/sign-up?redirect=" + this.redirectUrl()}
          onMessage={this.handleMessage('message')}
          onError={this.handleMessage('error')}
        />
      </Container>
    );
  }
}

export default SignUp;
