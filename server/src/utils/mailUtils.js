const sgMail = require('@sendgrid/mail');
const {
  emailVerifyTemplate,
  passwordForgotTemplate,
} = require('../helpers/mailTemplates');
const confiq = require('../../config');

const sendVerificationMail = ({ email, name, temporaryToken }) => {
  const message = emailVerifyTemplate(email, name, temporaryToken);

  sgMail.setApiKey(confiq.sgMailApiKey);

  sgMail.send(message);
};

const sendPasswordForgotMail = ({ email, name, passwordResetToken }) => {
  const message = passwordForgotTemplate(email, name, passwordResetToken);

  sgMail.setApiKey(confiq.sgMailApiKey);

  sgMail.send(message);
};

module.exports = {
  sendVerificationMail,
  sendPasswordForgotMail,
};
