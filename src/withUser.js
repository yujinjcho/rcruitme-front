import React, { Component } from 'react';

import auth from './auth';

export default Wrapped => {
  class WithUser extends Component {
    state = {
      user: null
    };

    componentDidMount() {
      fetch('/user', { headers: auth.header() })
        .then(res => res.json())
        .then(user => this.setState({ user }))
        .catch(_ => this.props.history.push('/sign-in'));
    }

    render() {
      return <Wrapped {...this.props} user={this.state.user} />;
    }
  }

  return WithUser;
};
