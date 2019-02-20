import React from 'react';
import { Redirect } from 'react-router-dom';

import withUser from './withUser';

export default Wrapped => {
  const WithUserType = props =>
    props.user === null
      ? null
      : !props.user.activated
        ? <Redirect to="/activate-message" />
        : props.user.type === 'none'
          ? <Redirect to="/select-user-type" />
          : <Wrapped {...props} />;

  return withUser(WithUserType);
};
