import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
import CreateAccount from './CreateAccount';
import auth from './auth';

class Navigation extends Component {

  homeHandler = () => this.props.history.push('/');

  render() {
    return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#" onClick={ this.homeHandler }>
          Rcruitme
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            { !auth.loggedIn() && <CreateAccount /> }
            {auth.loggedIn() ? <SignOutLink /> : <SignInLink />}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default withRouter(Navigation);
