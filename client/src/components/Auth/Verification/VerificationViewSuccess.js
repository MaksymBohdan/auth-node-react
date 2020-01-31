import React from 'react';
import SignInRedirect from '../components/SignInRedirect';
import {
  VERIFICATION_SUCCESS_TITLE,
  VERIFICATION_SUCCESS_CONTENT,
} from '../../../helpers/authConstants';

const VerificationSuccess = () => (
  <SignInRedirect
    title={VERIFICATION_SUCCESS_TITLE}
    content={VERIFICATION_SUCCESS_CONTENT}
  />
);

export default VerificationSuccess;
