import React from 'react';
import { Link } from 'react-router-dom';
import {
  ConfirmButton,
  FormTitle,
  ConfirmComponent,
  FormContent
} from '../styles';

const VerificationSuccess = () => (
  <ConfirmComponent success={true}>
    <FormTitle>Thank you!</FormTitle>
    <FormContent>Your account has been verified. Please sign in</FormContent>
    <Link to="/signin">
      <ConfirmButton success={true}>GO TO SIGN IN</ConfirmButton>
    </Link>
  </ConfirmComponent>
);

export default VerificationSuccess;
