import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';
import SendMailForm from '../components/SendMailForm';
import {
  PASSWORD_FORGOT_CONTENT,
  PASSWORD_FORGOT_TITLE,
} from '../../../helpers/authConstants';

const PasswordForgot = () => {
  const { onPasswordForgot } = useContext(AuthContext);

  return (
    <SendMailForm
      onSubmit={onPasswordForgot}
      title={PASSWORD_FORGOT_TITLE}
      content={PASSWORD_FORGOT_CONTENT}
    />
  );
};

export default PasswordForgot;
