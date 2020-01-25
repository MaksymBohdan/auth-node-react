import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const signUp = credentials =>
  axios.post('/signup', credentials).then(({ data }) => data);

const signIn = credentials =>
  axios.post('/signin', credentials).then(({ data }) => data);

const verifyAccount = token =>
  axios.post('/verify', token).then(({ data }) => data);

const resendToken = email =>
  axios.post('/resend', email).then(({ data }) => data);

const passwordForgot = email =>
  axios.post('/password-forgot', email).then(({ data }) => data);

const passwordReset = password =>
  axios.post('/password-reset', password).then(({ data }) => data);

const personDelete = token =>
  axios
    .post('/delete', {
      Authorization: `Bearer ${token}`
    })
    .then(({ data }) => data.person);

const connectWithFb = credentials =>
  axios.post('/fb-connect', credentials).then(({ data }) => data);

export {
  signUp,
  signIn,
  personDelete,
  verifyAccount,
  resendToken,
  passwordForgot,
  passwordReset,
  connectWithFb
};
