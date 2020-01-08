import axios from 'axios';
import { getAuthRoute } from '../utils/authUtils';

axios.defaults.baseURL = 'http://localhost:4040';

const personAuth = (credentials, isRegistration) =>
  axios
    .post(getAuthRoute(isRegistration), credentials)
    .then(({ data }) => data);

const personDelete = token =>
  axios
    .post('/delete', {
      Authorization: `Bearer ${token}`
    })
    .then(({ data }) => data.person);

export { personAuth, personDelete };
