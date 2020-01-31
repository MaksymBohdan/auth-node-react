import React from 'react';
import AuthContext from '../../../contexts/auth';
import SendMailForm from '../components/SendMailForm';
import {
  PASSWORD_FORGOT_CONTENT,
  PASSWORD_FORGOT_TITLE,
} from '../../../helpers/authConstants';

const PasswordForgot = () => (
  <AuthContext.Consumer>
    {({ onPasswordForgot }) => (
      <SendMailForm
        onSubmit={onPasswordForgot}
        title={PASSWORD_FORGOT_TITLE}
        content={PASSWORD_FORGOT_CONTENT}
      />
    )}
  </AuthContext.Consumer>
);

export default PasswordForgot;
