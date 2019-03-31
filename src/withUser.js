import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import auth from './auth';

export default Wrapped => {
  class WithUser extends Component {
    state = {
      user: null
    };

    handleError = error => {
      this.setState({ user: null });
      auth.logOut();
      this.props.history.push('/sign-in')
    }

    componentDidMount() {
      fetch(process.env.REACT_APP_SERVICES_BASE_URL + '/user', { headers: auth.header() })
        .then(res => res.json())
        .then(user => this.setState({ user }))
        .catch(this.handleError);
    }

    render() {
      return <Wrapped {...this.props} user={this.state.user} />;
    }
  }

  return withRouter(WithUser);
};
