import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const personCreate = credentials =>
  axios.post('/signup', credentials).then(({ data }) => data);

export { personCreate };
