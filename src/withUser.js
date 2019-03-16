import React, { Component } from 'react';

import auth from './auth';

export default Wrapped => {
  class WithUser extends Component {
    state = {
      user: null
    };

    handleError(error) {
      this.setState({ user: null });
      auth.logOut();
    }

    componentDidMount() {
      fetch('/user', { headers: auth.header() })
        .then(res => res.json())
        .then(user => this.setState({ user }))
        .catch(this.handleError.bind(this));
    }

    render() {
      return <Wrapped {...this.props} user={this.state.user} />;
    }
  }

  return WithUser;
};
