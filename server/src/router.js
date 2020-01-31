const express = require('express');

const router = express.Router();
const {
  signupRoute,
  signinRoute,
  personDeleteRoute,
  verifyRoute,
  resendTokenRoute,
  passwordForgotRoute,
  passwordResetRoute,
  fbConnectionRoute,
  googleConnectionRoute,
  fileUploadRoute,
} = require('./controllers');
const checkAuth = require('./middleware/checkAuth');
const uploadMiddleware = require('./middleware/uploads');

router
  .post('/signup', signupRoute)
  .post('/signin', signinRoute)
  .post('/fb-connect', fbConnectionRoute)
  .post('/google-connect', googleConnectionRoute)
  .post('/verify', verifyRoute)
  .post('/resend', resendTokenRoute)
  .post('/password-forgot', passwordForgotRoute)
  .post('/password-reset', passwordResetRoute)
  .post('/delete', checkAuth, personDeleteRoute)
  .post('/upload-file', uploadMiddleware, fileUploadRoute);

module.exports = router;
