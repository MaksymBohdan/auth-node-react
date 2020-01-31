import React from 'react';
import { Formik } from 'formik';
import AuthContext from '../../../contexts/auth';
import SignUpView from './SignUpView';
import { signUpValidation } from '../../../helpers/formValidators';
import { PageWrapper } from '../styles';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => (
  <AuthContext.Consumer>
    {({ onSignUp }) => (
      <PageWrapper>
        <Formik
          initialValues={initialFormValues}
          onSubmit={(value, { setSubmitting }) =>
            onSignUp(value, setSubmitting)
          }
          validationSchema={signUpValidation}
        >
          {({ isSubmitting }) => <SignUpView isSubmitting={isSubmitting} />}
        </Formik>
      </PageWrapper>
    )}
  </AuthContext.Consumer>
);

export default SignUp;
