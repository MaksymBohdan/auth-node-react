import React from 'react';
import { Formik } from 'formik';
import { signUpValidation } from '../../helpers/formValidators';
import AuthContext from '../../contexts/auth';
import { PageWrapper } from './styles';
import SignUpView from './SignUpView';

const SignUp = () => (
  <PageWrapper>
    <AuthContext.Consumer>
      {({ onSignUp }) => (
        <Formik
          initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
          onSubmit={values => {
            onSignUp(values);
          }}
          validationSchema={signUpValidation}
        >
          {({ isSubmitting }) => <SignUpView isSubmitting={isSubmitting} />}
        </Formik>
      )}
    </AuthContext.Consumer>
  </PageWrapper>
);

export default SignUp;
