import React, { Component } from 'react';
import { Navbar,Nav,NavItem} from 'react-bootstrap';

class Navigation extends Component {

  render() {

    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Brand>
				  Rcruitme
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="/" to="/">
                Sign-Out
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
