import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Alert from 'react-bootstrap/lib/Alert';

import SubmitJobForm from './SubmitJobForm';

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
          onMessage={this.handleMessage('message')}
          onError={this.handleMessage('error')}
        />
      </Container>
    );
  }
}

export default SubmitJob;
