import * as Yup from 'yup';

const signUpValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Your name is too short')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Your password is too short')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required')
});

export { signUpValidation };