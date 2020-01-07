const express = require('express');
const router = express.Router();
const { signupRoute, personDeleteRoute } = require('./routes');
const checkAuth = require('./middleware/checkAuth');

router
  .get('/', (req, res) => {
    console.log('get started');
  })
  .post('/signup', signupRoute)
  .post('/delete', checkAuth, personDeleteRoute);

module.exports = router;
