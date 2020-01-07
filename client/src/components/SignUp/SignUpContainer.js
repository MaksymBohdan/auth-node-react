import React from 'react';
import { Formik } from 'formik';
import AuthContext from '../../contexts/auth';
import SignUpView from './SignUpView';
import { signUpValidation } from '../../helpers/formValidators';
import { PageWrapper } from './styles';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUp = () => (
  <PageWrapper>
    <AuthContext.Consumer>
      {({ onSignUp }) => (
        <Formik
          initialValues={initialFormValues}
          onSubmit={(value, { setSubmitting }) =>
            onSignUp(value, setSubmitting)
          }
          validationSchema={signUpValidation}
        >
          {({ isSubmitting }) => <SignUpView isSubmitting={isSubmitting} />}
        </Formik>
      )}
    </AuthContext.Consumer>
  </PageWrapper>
);

export default SignUp;
