import React from 'react';
import AuthContext from '../../contexts/auth';

const Main = () => {
  return (
    <AuthContext.Consumer>
      {({ user, isAuthenticated }) => (isAuthenticated ? <div>{user.name}</div> : <div>not authorazied</div>)}
    </AuthContext.Consumer>
  );
};

export default Main;
