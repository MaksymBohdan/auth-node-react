import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { resendTokenValidation } from '../../../helpers/formValidators';
import {
  StyledFormError,
  FormTitle,
  StyledButtonError,
  StyledRow,
  StyledField,
  StyledInlineErrorMessage,
  FormContent
} from '../styles';

const VerificationFailed = ({ resend }) => (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={(value, { setSubmitting }) => resend(value, setSubmitting)}
    validationSchema={resendTokenValidation}
  >
    {({ isSubmitting }) => (
      <StyledFormError>
        <FormTitle>Sorry!</FormTitle>
        <FormContent>
          Verification link has expired. Try to resend it
        </FormContent>
        <StyledRow>
          <StyledField type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email">
            {error => (
              <StyledInlineErrorMessage>{error}</StyledInlineErrorMessage>
            )}
          </ErrorMessage>
        </StyledRow>
        <StyledButtonError type="submit" disabled={isSubmitting}>
          {isSubmitting ? `Resending...` : `Resend`}
        </StyledButtonError>
      </StyledFormError>
    )}
  </Formik>
);

export default VerificationFailed;
