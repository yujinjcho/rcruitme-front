import React from 'react';

import withUserValidation from './withUserValidation';

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default withUserValidation(Home);
