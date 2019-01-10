import React, { Component } from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import Container from 'react-bootstrap/lib/Container';

import formFields from './signUpFormFields';
import formFrom from './formFrom';

const SignUpForm = formFrom(formFields);

class SignUp extends Component {
  state = {
    message: '',
    error: ''
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
          endpoint="/sign-up"
          onMessage={this.handleMessage('message')}
          onError={this.handleMessage('error')}
        />
      </Container>
    );
  }
}

export default SignUp;
