import React from 'react';
import { Redirect } from 'react-router-dom';

import auth from './auth';

export default () => {
  auth.saveFromQueryString(window.location.search);

  return <Redirect to="/" />;
};
