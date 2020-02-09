import React, { useContext } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { AuthContext } from '../../../contexts/auth';
import { StyledButtonFb } from './styles';

const FacebookButton = () => {
  const { onConnectWithFb } = useContext(AuthContext);

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FB_SECRET}
      callback={onConnectWithFb}
      fields="name,email,picture"
      render={({ onClick }) => (
        <StyledButtonFb type="button" onClick={onClick}>
          Connect with Facebook
        </StyledButtonFb>
      )}
    />
  );
};

export default FacebookButton;
