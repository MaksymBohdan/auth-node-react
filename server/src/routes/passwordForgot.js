const Person = require('../models/person');
const {
  ACCOUNT_NOT_EXIST,
  SERVER_ERROR,
  PASSWORD_RESET_MSG
} = require('../helpers/messages');
const { sendPasswordForgotMail } = require('../utils/mailUtils');
const { createToken } = require('../utils/tokenUtils');

const passwordForgotRoute = (req, res) => {
  const { email } = req.body;

  Person.findOne({ email })
    .then(person => {
      if (!person) return res.status(409).json(ACCOUNT_NOT_EXIST);

      const { name } = person;

      const passwordResetToken = createToken({ email });

      Person.findOneAndUpdate({ email }, { passwordResetToken })
        .then(() => res.status(200).json(PASSWORD_RESET_MSG))
        .catch(err => res.status(500).json({ ...SERVER_ERROR, err }));

      sendPasswordForgotMail({ email, name, passwordResetToken });
    })
    .catch(err => res.status(500).json({ ...SERVER_ERROR, err }));
};

module.exports = passwordForgotRoute;
