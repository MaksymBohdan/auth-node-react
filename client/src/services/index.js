import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const signUp = credentials =>
  axios.post('/signup', credentials).then(({ data }) => data);

const signIn = credentials =>
  axios.post('/signin', credentials).then(({ data }) => data);

const verifyAccount = token =>
  axios.patch('/verify', token).then(({ data }) => console.log(data) || data);

const resendToken = token =>
  axios.post('/resend', token).then(({ data }) => data);

const personDelete = token =>
  axios
    .post('/delete', {
      Authorization: `Bearer ${token}`
    })
    .then(({ data }) => data.person);

export { signUp, signIn, personDelete, verifyAccount, resendToken };
