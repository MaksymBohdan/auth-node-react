import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main/Main';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import AuthContext from '../contexts/auth';

function App() {
  return (
    <AuthContext>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </AuthContext>
  );
}

export default App;
