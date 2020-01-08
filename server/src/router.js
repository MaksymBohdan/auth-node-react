const express = require('express');
const router = express.Router();
const { signupRoute, signinRoute, personDeleteRoute } = require('./routes');
const checkAuth = require('./middleware/checkAuth');

router
  
  .post('/signup', signupRoute)
  .post('/signin', signinRoute)
  .post('/delete', checkAuth, personDeleteRoute);

module.exports = router;
