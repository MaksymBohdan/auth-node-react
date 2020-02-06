import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import Main from './Main/Main';
import SignIn from './Auth/SignIn/SignInContainer';
import SignUp from './Auth/SignUp/SignUpContainer';
import PasswordForgot from './Auth/PasswordForgot/PasswordForgot';
import PasswordReset from './Auth/PasswordForgot/PasswordConfirm';
import Verification from './Auth/Verification/VerificationContainer';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

const App = () => {
  const { person } = useContext(AuthContext);

  return (
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
      <Route path="/password-forgot" component={PasswordForgot} />
      <Route path="/password-reset/:token" component={PasswordReset} />
    </Switch>
  );
};

export default App;
