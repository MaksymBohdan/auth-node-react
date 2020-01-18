const signupRoute = require('./signup');
const personDeleteRoute = require('./personDelete');
const signinRoute = require('./signin');
const verifyRoute = require('./verify');
const resendTokenRoute = require('./resend');

module.exports = {
  signupRoute,
  signinRoute,
  personDeleteRoute,
  verifyRoute,
  resendTokenRoute
};
