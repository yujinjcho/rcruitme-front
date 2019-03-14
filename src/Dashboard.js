import React from 'react';
import Container from 'react-bootstrap/lib/Container';

import withUserValidation from './withUserValidation';

const Dashboard = () => (
  <Container>
    <h1>Dashboard</h1>
  </ Container>
);

export default withUserValidation(Dashboard);
