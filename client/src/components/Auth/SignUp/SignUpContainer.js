import React, { useContext } from 'react';
import { Formik } from 'formik';
import { AuthContext } from '../../../contexts/auth';
import SignUpView from './SignUpView';
import { signUpValidation } from '../../../helpers/formValidators';
import { PageWrapper } from '../styles';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const { onSignUp } = useContext(AuthContext);

  return (
    <PageWrapper>
      <Formik
        initialValues={initialFormValues}
        onSubmit={(value, { setSubmitting }) => onSignUp(value, setSubmitting)}
        validationSchema={signUpValidation}
      >
        {({ isSubmitting }) => <SignUpView isSubmitting={isSubmitting} />}
      </Formik>
    </PageWrapper>
  );
};

export default SignUp;
