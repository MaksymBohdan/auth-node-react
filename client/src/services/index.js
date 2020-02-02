import axios from 'axios';
import * as url from '../helpers/urlConstants';

axios.defaults.baseURL = 'http://localhost:4040';

const fetcher = (url, body) => axios.post(url, body).then(({ data }) => data);

const signIn = credentials => fetcher(url.SIGN_IN, credentials);
const signUp = credentials => fetcher(url.SIGN_UP, credentials);
const verifyAccount = token => fetcher(url.VERIFY, token);
const resendToken = email => fetcher(url.RESEND, email);
const passwordForgot = email => fetcher(url.PASS_FORGOT, email);
const passwordReset = password => fetcher(url.PASS_RESET, password);
const connectWithFb = credentials => fetcher(url.FB_CONNECT, credentials);
const connectWithGoogle = credentials => fetcher(url.G_CONNECT, credentials);
const uploadFile = formData => fetcher(url.UPLOAD, formData);
const personDelete = token =>
  fetcher(url.DELETE, { Authorization: `Bearer ${token}` });

export {
  signUp,
  signIn,
  personDelete,
  verifyAccount,
  resendToken,
  passwordForgot,
  passwordReset,
  connectWithFb,
  connectWithGoogle,
  uploadFile,
};
