const sgMail = require('@sendgrid/mail');
const createEmailTemplate = require('./mailTemplateUtils');
const confiq = require('../../config');

const sendMail = ({ email, name , temporaryToken}) => {
  const msg = {
    to: email,
    from: 'noreply@authapp.com',
    subject: 'Verification email',
    html: createEmailTemplate(name, temporaryToken)
  };

  sgMail.setApiKey(confiq.sgMailApiKey);

  sgMail.send(msg);
};

module.exports = sendMail;
