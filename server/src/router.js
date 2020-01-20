const express = require('express');
const router = express.Router();
const {
  signupRoute,
  signinRoute,
  personDeleteRoute,
  verifyRoute,
  resendTokenRoute,
  passwordForgotRoute,
  passwordResetRoute
} = require('./routes');
const checkAuth = require('./middleware/checkAuth');

router
  .post('/signup', signupRoute)
  .post('/signin', signinRoute)
  .post('/verify', verifyRoute)
  .post('/resend', resendTokenRoute)
  .post('/password-forgot', passwordForgotRoute)
  .post('/password-reset', (passwordResetRoute))
  .post('/delete', checkAuth, personDeleteRoute);

module.exports = router;
