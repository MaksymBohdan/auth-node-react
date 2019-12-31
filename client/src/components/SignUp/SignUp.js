import React from 'react';
import { Formik } from 'formik';
import { signUpValidation } from '../../helpers/formValidators';
import AuthContext from '../../contexts/auth';
import { PageWrapper } from './styles';
import SignUpView from './SignUpView';

const SignUp = ({ history }) => (
  <PageWrapper>
    <AuthContext.Consumer>
      {({ onSignIn }) => (
        <Formik
          initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
          onSubmit={values => {
            onSignIn(values);
            history.push('/');
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
