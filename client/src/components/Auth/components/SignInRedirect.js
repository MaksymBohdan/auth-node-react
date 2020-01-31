import React from 'react';
import { Link } from 'react-router-dom';
import {
  ConfirmButton,
  FormTitle,
  ConfirmComponent,
  FormContent,
  PageWrapper,
} from '../styles';

const SignInRedirect = ({ title, content }) => (
  <PageWrapper>
    <ConfirmComponent success>
      <FormTitle>{title}</FormTitle>
      <FormContent>{content}</FormContent>
      <Link to="/signin">
        <ConfirmButton success>GO TO SIGN IN</ConfirmButton>
      </Link>
    </ConfirmComponent>
  </PageWrapper>
);

export default SignInRedirect;
