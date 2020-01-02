import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const userCreate = credentials => {
  console.log('credentials', credentials);

  axios.post('/signup', credentials)
  // .then(response => {
  //   console.log('res', response);
  // });
};

export { userCreate };
