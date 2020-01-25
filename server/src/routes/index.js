const signupRoute = require('./signup');
const personDeleteRoute = require('./personDelete');
const signinRoute = require('./signin');
const verifyRoute = require('./verify');
const resendTokenRoute = require('./resend');
const passwordForgotRoute = require('./passwordForgot');
const passwordResetRoute = require('./passwordReset');
const fbConnectionRoute = require('./fbConnect');
const googleConnectionRoute = require('./googleConnect')

module.exports = {
  signupRoute,
  signinRoute,
  personDeleteRoute,
  verifyRoute,
  resendTokenRoute,
  passwordForgotRoute,
  passwordResetRoute,
  fbConnectionRoute,
  googleConnectionRoute
};
