import React from 'react';
import { Redirect } from 'react-router-dom';
import { parse } from 'qs';

import auth from './auth';

export default () => {
  auth.saveFromQueryString(window.location.search);

  const { redirect } = parse(window.location.search, { ignoreQueryPrefix: true });

  if (redirect) {
    window.location = redirect;
  };

  return <Redirect to="/" />
};
