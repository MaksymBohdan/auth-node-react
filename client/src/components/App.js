import React from 'react';
import { Switch } from 'react-router-dom';
import Main from './Main/Main';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUpContainer';
import AuthContext from '../contexts/auth';
import NotificationContext from '../contexts/notifications';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

function App() {
  return (
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
                redirectTo="/signup"
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
            </Switch>
          )}
        </AuthContext.Consumer>
      </AuthContext>
    </NotificationContext>
  );
}

export default App;
