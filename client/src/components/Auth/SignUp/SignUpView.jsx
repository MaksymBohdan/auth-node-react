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

const SignUpView = ({ isSubmitting }) => (
  <StyledForm>
    <FormTitle>Sign Up</FormTitle>
    <StyledRow>
      <StyledField type="text" name="name" placeholder="Name" />
      <ErrorMessage name="name">
        {error => <StyledInlineErrorMessage>{error}</StyledInlineErrorMessage>}
      </ErrorMessage>
    </StyledRow>
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
    <StyledRow>
      <StyledField
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
      />
      <ErrorMessage name="confirmPassword">
        {error => <StyledInlineErrorMessage>{error}</StyledInlineErrorMessage>}
      </ErrorMessage>
    </StyledRow>
    <StyledButton type="submit" disabled={isSubmitting}>
      {isSubmitting ? `Submiting...` : `Submit`}
    </StyledButton>
    <LinkArea to="/signin">I've got an account already</LinkArea>
  </StyledForm>
);

export default SignUpView;