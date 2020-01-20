import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { mailValidation } from '../../../helpers/formValidators';
import {
  StyledFormError,
  FormTitle,
  StyledButtonError,
  StyledRow,
  StyledField,
  StyledInlineErrorMessage,
  FormContent,
  PageWrapper
} from '../styles';

const SendMailForm = ({ title, content, onSubmit }) => {
  return (
    <PageWrapper>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(value, { setSubmitting }) => onSubmit(value, setSubmitting)}
        validationSchema={mailValidation}
      >
        {({ isSubmitting }) => (
          <StyledFormError>
            <FormTitle>{title}</FormTitle>
            <FormContent>{content}</FormContent>
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
    </PageWrapper>
  );
};

export default SendMailForm;
