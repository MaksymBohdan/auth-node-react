import React from 'react';
import { Link } from 'react-router-dom';
import { ConfirmButton, ContirmTitle, ConfirmComponent } from '../styles';

const VerificationSuccess = () => (
  <ConfirmComponent success={true}>
    <ContirmTitle>Thank you!</ContirmTitle>
    <p>Your account has been verified. Please sign in</p>
    <Link to="/signin">
      <ConfirmButton success={true}>GO TO SIGN IN</ConfirmButton>
    </Link>
  </ConfirmComponent>
);

export default VerificationSuccess;
