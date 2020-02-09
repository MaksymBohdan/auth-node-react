import axios from 'axios';
import * as url from '../helpers/urlConstants';

axios.defaults.baseURL = 'http://localhost:4040';

const fetcher = (path, body) => axios.post(path, body).then(({ data }) => data);

export const signIn = credentials => fetcher(url.SIGN_IN, credentials);
export const signUp = credentials => fetcher(url.SIGN_UP, credentials);
export const verifyAccount = token => fetcher(url.VERIFY, token);
export const resendToken = email => fetcher(url.RESEND, email);
export const passwordForgot = email => fetcher(url.PASS_FORGOT, email);
export const passwordReset = password => fetcher(url.PASS_RESET, password);
export const connectWithFb = credentials =>
  fetcher(url.FB_CONNECT, credentials);
export const connectWithGoogle = credentials =>
  fetcher(url.G_CONNECT, credentials);
export const uploadFile = formData => fetcher(url.UPLOAD, formData);
export const personDelete = token =>
  fetcher(url.DELETE, { Authorization: `Bearer ${token}` });
