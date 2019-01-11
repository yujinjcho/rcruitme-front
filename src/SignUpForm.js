import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import { stringify } from 'qs';

import capitalize from './capitalize';
import formFields from './signUpFormFields';
import noop from './noop';

const INITIAL_FIELDS = {
  userType: 'candidate',
  email: '',
  firstName: '',
  lastName: '',
  password: ''
};

const optionsForField = type => ({
  select: options => options.map(option => (
    <option key={option} value={option}>{capitalize(option)}</option>
  ))
})[type] || noop;

class SignUpForm extends Component {
  state = {
    fields: { ...INITIAL_FIELDS },
    errors: {}
  };

  handleChange = field => e =>
    this.setState({
      fields: {
        ...this.state.fields,
        [field]: e.target.value
      }
    });

  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    fetch('/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: stringify(this.state.fields)
    })
      .then(res => res.status === 400
        ? res.json().then(this.handleError)
        : res.json().then(this.handleSuccess)
      )
      .catch(_ => this.props.onError('There was an error.'));
  };

  handleSuccess = ({ message }) =>
    this.setState({
      fields: INITIAL_FIELDS,
      errors: {}
    }, () => {
      this.props.onMessage(message);
      this.props.onError('');
    });

  handleError = errors =>
    this.setState({
      errors
    }, () => {
      this.props.onError('Please correctly fill out required fields.');
      this.props.onMessage('');
    });

  render() {
    const { fields, errors } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        {formFields.map(({ label, name, type, options }) => (
          <Form.Group key={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
              name={name}
              as={type}
              value={fields[name]}
              onChange={this.handleChange(name)}
              isInvalid={errors[name]}
              children={optionsForField(type)(options)}
            />
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    );
  }
}

export default SignUpForm;
