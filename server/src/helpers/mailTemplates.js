const MailGen = require('mailgen');

const mailGenerator = new MailGen({
  theme: 'salted',
  product: {
    name: 'Authapp',
    link: 'http://localhost:3000/'
  }
});

const emailVerifyTemplate = (email, name, temporaryToken) => {
  const htmlTemplate = {
    body: {
      name,
      intro: 'Welcome to email verification',
      action: {
        instructions: 'Please, click the button below to verify your account',
        button: {
          color: '#33b5e5',
          text: 'Verify account',
          link: `http://localhost:3000/verify/${temporaryToken}`
        }
      }
    }
  };

  return {
    to: email,
    from: 'noreply@authapp.com',
    subject: 'Verification email',
    html: mailGenerator.generate(htmlTemplate)
  };
};

const passwordForgotTemplate = (email, name, passwordResetToken) => {
  const htmlTemplate = {
    body: {
      name,
      intro:
        'If you did not request a change of password, please ignore this e-mail',
      action: {
        instructions:
          'Please, click the button to reset your current password.',
        button: {
          color: '#33b5e5',
          text: 'Reset password',
          link: `http://localhost:3000/password-reset/${passwordResetToken}`
        }
      }
    }
  };

  return {
    to: email,
    from: 'noreply@authapp.com',
    subject: 'Forgot password',
    html: mailGenerator.generate(htmlTemplate)
  };
};

module.exports = { emailVerifyTemplate, passwordForgotTemplate };
