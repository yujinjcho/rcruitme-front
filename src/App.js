import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AuthRedirect from './AuthRedirect';
import Home from './Home';
import SelectUserType from './SelectUserType';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SubmitJob from './SubmitJob';
import Navigation from './Navigation';
import ActivateMessage from './ActivateMessage';
import JobDescription from './JobDescription';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route exact path="/select-user-type" component={SelectUserType} />
            <Route exact path="/activate-message" component={ActivateMessage} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route path="/submit-job/:candidateId" component={SubmitJob} />
            <Route path="/job/:jobId" component={JobDescription} />
            <Route path="/auth" component={AuthRedirect} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
