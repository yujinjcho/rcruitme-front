import React from 'react';
import { Redirect } from 'react-router-dom';

import auth from './auth';
import query from './query';

export default () => {
  auth.saveFromQueryString();
  const { redirect } = query.parameters();
  return <Redirect to={ redirect || "/" } />
};
