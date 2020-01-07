import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const personCreate = credentials =>
  axios.post('/signup', credentials).then(({ data }) => data);

const personDelete = token =>
  axios
    .post('/delete', {
      Authorization: `Bearer ${token}`
    })
    .then(({ data }) => data.person);

export { personCreate, personDelete };
