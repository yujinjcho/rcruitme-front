import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AuthRedirect from './AuthRedirect';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SubmitJob from './SubmitJob';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route path="/submit-job/:candidateId" component={SubmitJob} />
            <Route path="/auth" component={AuthRedirect} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
