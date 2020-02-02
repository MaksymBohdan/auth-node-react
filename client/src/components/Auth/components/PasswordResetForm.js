import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { resetPasswordValidation } from '../../../helpers/formValidators';
import {
  FormTitle,
  StyledFormError,
  StyledField,
  StyledButtonError,
  StyledInlineErrorMessage,
  StyledRow,
  FormContent,
  PageWrapper,
} from '../styles';

const PasswordResetForm = ({ token, onSubmit, title, content }) => (
  <PageWrapper>
    <Formik
      initialValues={{ password: '', confirmPassword: '' }}
      onSubmit={(value, { setSubmitting }) => {
        onSubmit({ ...value, token }, setSubmitting);
      }}
      validationSchema={resetPasswordValidation}
    >
      {({ isSubmitting }) => (
        <StyledFormError>
          <FormTitle>{title}</FormTitle>
          <FormContent>{content}</FormContent>
          <StyledRow>
            <StyledField
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage name="password">
              {error => (
                <StyledInlineErrorMessage>{error}</StyledInlineErrorMessage>
              )}
            </ErrorMessage>
          </StyledRow>
          <StyledRow>
            <StyledField
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <ErrorMessage name="confirmPassword">
              {error => (
                <StyledInlineErrorMessage>{error}</StyledInlineErrorMessage>
              )}
            </ErrorMessage>
          </StyledRow>
          <StyledButtonError type="submit" disabled={isSubmitting}>
            {isSubmitting ? `Submiting...` : `Submit`}
          </StyledButtonError>
        </StyledFormError>
      )}
    </Formik>
  </PageWrapper>
);

export default PasswordResetForm;
