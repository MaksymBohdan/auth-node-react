const MailGen = require('mailgen');

const createEmailTemplate = (name, temporaryToken) => {
  const mailGenerator = new MailGen({
    theme: 'salted',
    product: {
      name: 'Authapp',
      link: 'http://localhost:3000/'
    }
  });

  const email = {
    body: {
      name,
      intro: 'Welcome to email verification',
      action: {
        instructions: 'Please click the button below to verify your account',
        button: {
          color: '#33b5e5',
          text: 'Verify account',
          link: `http://localhost:3000/verify/${temporaryToken}`
        }
      }
    }
  };

  return mailGenerator.generate(email);
};

module.exports = createEmailTemplate;
