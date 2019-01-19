import React, { Component } from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import Container from 'react-bootstrap/lib/Container';

import formFields from './submitJobFormFields';
import formFrom from './formFrom';

const SubmitJobForm = formFrom(formFields);

class SubmitJob extends Component {
  state = {
    message: '',
    error: ''
  };

  handleMessage = type => message =>
    this.setState({ [type]: message });

  render() {
    return (
      <Container>
        <h1>Submit Job</h1>
        {this.state.message && <Alert variant="success">{this.state.message}</Alert>}
        {this.state.error && <Alert variant="danger">{this.state.error}</Alert>}
        <SubmitJobForm
          authed
          endpoint="/submit-job"
          onMessage={this.handleMessage('message')}
          onError={this.handleMessage('error')}
          successMessage="Job submitted."
        />
      </Container>
    );
  }
}

export default SubmitJob;
