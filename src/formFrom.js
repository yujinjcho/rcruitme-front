import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import { stringify } from 'qs';

import auth from './auth';
import capitalize from './capitalize';
import noop from './noop';

const optionsForField = type => ({
  select: options => options.map(option => (
    <option key={option} value={option}>{capitalize(option)}</option>
  ))
})[type] || noop;

export default formFields => {
  const initialFields = formFields.reduce((acc, { name, initial }) => ({
    ...acc,
    [name]: initial === undefined ? '' : initial
  }), {});

  class RemoteForm extends Component {
    state = {
      fields: { ...initialFields },
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

      fetch(this.props.endpoint, {
        method: 'POST',
        headers: {
          ...(this.props.authed ? auth.header() : {}),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: stringify(this.state.fields)
      })
        .then(res => res.status === 400
          ? res.json().then(this.handleError)
          : res.json().then(data => this.handleSuccess(data, res))
        )
        .catch(_ => this.props.onError('There was an error.'));
    };

    handleSuccess = (data, res) =>
      this.setState({
        fields: initialFields,
        errors: {}
      }, () => {
        if (this.props.onSuccess) return this.props.onSuccess(data, res);

        this.props.onMessage(this.props.successMessage || data.message);
        this.props.onError('')
      });

    handleError = errors =>
      this.setState({
        errors
      }, () => {
        this.props.onError(this.props.errorMessage || 'Please correctly fill out required fields.');
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
                isInvalid={!this.props.hideInvalid && errors[name]}
                children={optionsForField(type)(options)}
              />
            </Form.Group>
          ))}
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      );
    }
  }

  return RemoteForm;
};
