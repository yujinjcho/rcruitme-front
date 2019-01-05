import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import { stringify } from 'qs';

import titleize from './titleize';

const INITIAL_FIELDS = {
  role: '',
  company: '',
  location: '',
  salary: '',
  compensation: '',
  description: '',
  benefits: ''
};

class SubmitJobForm extends Component {
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

    fetch('/submit-job', {
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

  handleSuccess = _ =>
    this.setState({
      fields: INITIAL_FIELDS,
      errors: {}
    }, this.props.onMessage('Job submitted.'));

  handleError = errors =>
    this.setState({
      errors
    }, this.props.onError('Please correctly fill out required fields.'));

  render() {
    const { fields, errors } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        {Object.keys(fields).map(field => (
          <Form.Group key={field}>
            <Form.Label>{titleize(field)}</Form.Label>
            <Form.Control
              name={field}
              type="text"
              value={fields[field]}
              onChange={this.handleChange(field)}
              isInvalid={errors[field]}
            />
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    );
  }
}

export default SubmitJobForm;
