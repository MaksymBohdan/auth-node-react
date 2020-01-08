import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Component,
  conditions,
  redirectTo,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      conditions ? <Redirect to={redirectTo} /> : <Component {...props} />
    }
  />
);

export default ProtectedRoute;
