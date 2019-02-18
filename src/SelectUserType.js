import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';

import formFields from './userTypeFormField';
import formFrom from './formFrom';

const SelectUserTypeForm = formFrom(formFields);

class SelectUserType extends Component {
  handleSuccess = _ =>
    this.props.history.push('/');

  render() {
    return (
      <Container>
        <h1>Select User Type</h1>
        <SelectUserTypeForm
          endpoint="/user"
          method="PUT"
          onSuccess={this.handleSuccess}
        />
      </Container>
    );
  }
}

export default SelectUserType;
