import React from 'react';
import { ConfirmButton, ContirmTitle, ConfirmComponent } from '../styles';

const VerificationFailed = ({ resend, token }) => (
  <ConfirmComponent success={false}>
    <ContirmTitle>Sorry!</ContirmTitle>
    <p>Verification link has expired</p>
    <ConfirmButton success={false} onClick={() => resend(token)}>
      Resend
    </ConfirmButton>
  </ConfirmComponent>
);

export default VerificationFailed;
