import React from 'react';
import AuthContext from '../../contexts/auth';

const Main = () => {
  return (
    <AuthContext.Consumer>
      {({ person }) =>
        person ? <div>{person.name}</div> : <div>not authorazied</div>
      }
    </AuthContext.Consumer>
  );
};

export default Main;
