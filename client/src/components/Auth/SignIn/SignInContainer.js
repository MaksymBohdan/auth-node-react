import React from 'react';
import { Formik } from 'formik';
import AuthContext from '../../../contexts/auth';
import SignInView from './SignInView';
import { signInValidation } from '../../../helpers/formValidators';
import { PageWrapper } from '../styles';

const initialFormValues = {
  email: '',
  password: ''
};

const SignIn = () => (
  <PageWrapper>
    <AuthContext.Consumer>
      {({ onAuth }) => (
        <Formik
          initialValues={initialFormValues}
          onSubmit={(value, { setSubmitting }) =>
            onAuth(value, false, setSubmitting)
          }
          validationSchema={signInValidation}
        >
          {({ isSubmitting }) => <SignInView isSubmitting={isSubmitting} />}
        </Formik>
      )}
    </AuthContext.Consumer>
  </PageWrapper>
);

export default SignIn;
