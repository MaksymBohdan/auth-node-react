import React, { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import { AuthContext } from '../../../contexts/auth';
import { StyledButtonG } from './styles';

const GoogleButton = () => {
  const { onConnectWithGoogle } = useContext(AuthContext);

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      render={({ onClick }) => (
        <StyledButtonG type="button" onClick={onClick}>
          Connect with Google
        </StyledButtonG>
      )}
      onSuccess={onConnectWithGoogle}
    />
  );
};

export default GoogleButton;
