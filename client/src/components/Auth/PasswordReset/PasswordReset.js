import React from 'react';
import AuthContext from '../../../contexts/auth';
import PasswordResetForm from './PasswordResetForm';
import SignInRedirect from '../components/SignInRedirect';
import {
  PASSWORD_RESET_SUCCESS_CONTENT,
  PASSWORD_RESET_SUCCESS_TITLE,
  PASSWORD_RESET_FORM_TITLE,
  PASSWORD_RESET_FORM_CONTENT,
} from '../../../helpers/authConstants';

const PasswordConfirm = ({ match: { params } }) => (
  <AuthContext.Consumer>
    {({ onPasswordReset, isPasswordReset }) =>
      !isPasswordReset ? (
        <PasswordResetForm
          token={params.token}
          onSubmit={onPasswordReset}
          title={PASSWORD_RESET_FORM_TITLE}
          content={PASSWORD_RESET_FORM_CONTENT}
        />
      ) : (
        <SignInRedirect
          title={PASSWORD_RESET_SUCCESS_TITLE}
          content={PASSWORD_RESET_SUCCESS_CONTENT}
        />
      )
    }
  </AuthContext.Consumer>
);

export default PasswordConfirm;
