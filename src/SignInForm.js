import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import { stringify } from 'qs';

import formFields from './signInFormFields';

class SignInForm extends Component {
  state = {
    fields: {
      email: '',
      password: ''
    },
    loggedIn: false
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

    fetch('/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: stringify(this.state.fields)
    })
      .then(res => res.status === 400
        ? res.json().then(this.props.onError('Invalid login.'))
        : res.json().then(this.handleSuccess)
      )
      .catch(_ => this.props.onError('There was an error.'));
  };

  handleSuccess = _ =>
    this.setState({ loggedIn: true });

  render() {
    const { fields, loggedIn } = this.state;

    if (loggedIn) return <Redirect to="/" />;

    return (
      <Form onSubmit={this.handleSubmit}>
        {formFields.map(({ label, name, as }) => (
          <Form.Group key={name}>
            <Form.Label>{label}</Form.Label>
            <Form.Control
              name={name}
              as={as}
              value={fields[name]}
              onChange={this.handleChange(name)}
            />
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    );
  }
}

export default SignInForm;
