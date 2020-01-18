const express = require('express');
const router = express.Router();
const {
  signupRoute,
  signinRoute,
  personDeleteRoute,
  verifyRoute,
  resendTokenRoute
} = require('./routes');
const checkAuth = require('./middleware/checkAuth');

router
  .post('/signup', signupRoute)
  .post('/signin', signinRoute)
  .post('/delete', checkAuth, personDeleteRoute)
  .post('/resend', resendTokenRoute)
  .patch('/verify', verifyRoute);

module.exports = router;
