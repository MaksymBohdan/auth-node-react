import React from 'react';
import AuthContext from '../../../contexts/auth';
import SendMailForm from '../components/SendMailForm';
import {
  VERIFICATION_ERROR_CONTENT,
  VERIFICATION_ERROR_TITLE
} from '../../../helpers/authConstants';

const VerificationFailed = () => (
  <AuthContext.Consumer>
    {({ onTokenResend }) => (
      <SendMailForm
        onSubmit={onTokenResend}
        title={VERIFICATION_ERROR_TITLE}
        content={VERIFICATION_ERROR_CONTENT}
      />
    )}
  </AuthContext.Consumer>
);

export default VerificationFailed;
