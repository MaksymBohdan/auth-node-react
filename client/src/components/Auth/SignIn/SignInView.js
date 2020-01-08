import React from 'react';
import { ErrorMessage } from 'formik';
import {
  FormTitle,
  StyledForm,
  StyledField,
  StyledButton,
  StyledInlineErrorMessage,
  StyledRow,
  LinkArea
} from '../styles';

const SignInView = ({ isSubmitting }) => (
  <StyledForm>
    <FormTitle>Sign In</FormTitle>
    <StyledRow>
      <StyledField type="email" name="email" placeholder="Email" />
      <ErrorMessage name="email">
        {error => <StyledInlineErrorMessage>{error}</StyledInlineErrorMessage>}
      </ErrorMessage>
    </StyledRow>
    <StyledRow>
      <StyledField type="password" name="password" placeholder="Password" />
      <ErrorMessage name="password">
        {error => <StyledInlineErrorMessage>{error}</StyledInlineErrorMessage>}
      </ErrorMessage>
    </StyledRow>
    <StyledButton type="submit" disabled={isSubmitting}>
      {isSubmitting ? `Submiting...` : `Submit`}
    </StyledButton>
    <LinkArea to="/signup">I don't have an account yet</LinkArea>
  </StyledForm>
);

export default SignInView;