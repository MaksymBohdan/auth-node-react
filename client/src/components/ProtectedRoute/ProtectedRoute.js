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
    component={props =>
      conditions ? (
        <Redirect to={redirectTo} />
      ) : (
        <div>
          <Component {...props} />
        </div>
      )
    }
  />
);

export default ProtectedRoute;
