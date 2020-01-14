import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main/Main';
import SignIn from './Auth/SignIn/SignInContainer';
import SignUp from './Auth/SignUp/SignUpContainer';
import AuthContext from '../contexts/auth';
import NotificationContext from '../contexts/notifications';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Verification from './Auth/Verification/Verification';

const App = () => (
  <NotificationContext>
    <AuthContext>
      <AuthContext.Consumer>
        {({ person }) => (
          <Switch>
            <ProtectedRoute
              exact
              path="/"
              component={Main}
              conditions={!person}
              redirectTo="/signin"
            />
            <ProtectedRoute
              path="/signin"
              component={SignIn}
              conditions={person}
              redirectTo="/"
            />
            <ProtectedRoute
              path="/signup"
              component={SignUp}
              conditions={person}
              redirectTo="/"
            />
            <Route path="/verify/:token" component={Verification} />
          </Switch>
        )}
      </AuthContext.Consumer>
    </AuthContext>
  </NotificationContext>
);

export default App;
