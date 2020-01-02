const express = require('express');
const router = express.Router();
const signupRoute = require('./routes/signup');

router
  .get('/', (req, res) => {
    console.log('get started');
  })
  .post('/signup', signupRoute);

module.exports = router;
