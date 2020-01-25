import React from 'react';
import GoogleLogin from 'react-google-login';
import AuthContext from '../../contexts/auth';
import { StyledButtonG } from './styles';

const GoogleButton = () => (
  <AuthContext.Consumer>
    {({ onConnectWithGoogle }) => (
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        render={({ onClick }) => (
          <StyledButtonG type="button" onClick={onClick}>
            Connect with Google
          </StyledButtonG>
        )}
        onSuccess={onConnectWithGoogle}
      />
    )}
  </AuthContext.Consumer>
);

export default GoogleButton;
