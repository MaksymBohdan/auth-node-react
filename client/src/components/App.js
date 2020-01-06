import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main/Main';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUpContainer';
import AuthContext from '../contexts/auth';
import NotificationContext from '../contexts/notifications';

function App() {
  return (
    <NotificationContext>
      <AuthContext>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </AuthContext>
    </NotificationContext>
  );
}

export default App;
