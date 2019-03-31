import React from 'react';
import Container from 'react-bootstrap/lib/Container';

import withUserValidation from './withUserValidation';
import JobList from './JobList';

const Dashboard = (props) => (
  <Container>
    <JobList {...props} />
  </ Container>
);

export default withUserValidation(Dashboard);
