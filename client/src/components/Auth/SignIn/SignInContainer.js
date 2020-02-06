import React, { useContext } from 'react';
import { Formik } from 'formik';
import { AuthContext } from '../../../contexts/auth';
import SignInView from './SignInView';
import { signInValidation } from '../../../helpers/formValidators';
import { PageWrapper } from '../styles';

const initialFormValues = {
  email: '',
  password: '',
};

const SignIn = () => {
  const { onSignIn } = useContext(AuthContext);

  return (
    <PageWrapper>
      <Formik
        initialValues={initialFormValues}
        onSubmit={(value, { setSubmitting }) => onSignIn(value, setSubmitting)}
        validationSchema={signInValidation}
      >
        {({ isSubmitting }) => <SignInView isSubmitting={isSubmitting} />}
      </Formik>
    </PageWrapper>
  );
};

export default SignIn;
