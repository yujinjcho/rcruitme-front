import React, { Component } from 'react';

import LandingPage from './LandingPage';
import Dashboard from './Dashboard';

import auth from './auth';

class Home extends Component {

  state = {
    loggedIn: auth.loggedIn()
  };

  render() {
    const { loggedIn } = this.state;
    return loggedIn ? <Dashboard /> : <LandingPage />
  }
}

export default Home;
