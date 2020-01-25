const Person = require('../models/person');
const { createToken } = require('../utils/tokenUtils');
const sendConfirmationMail = require('../utils/mailUtils');
const {
  ACCOUNT_ACTIVATED,
  ACCOUNT_NOT_EXIST,
  VERIFICATION_MSG,
  SERVER_ERROR
} = require('../helpers/messages');

const resendTokenRoute = (req, res) => {
  const { email } = req.body;

  Person.findOne({ email })
    .then(person => {
      if (!person) return res.status(409).json(ACCOUNT_NOT_EXIST);
      if (person.active && !person.temporaryToken)
        return res.status(409).json(ACCOUNT_ACTIVATED);

      const { email, name } = person;
      const updatedToken = createToken({ email });

      Person.findOneAndUpdate(
        { email },
        { temporaryToken: updatedToken, active: true }
      )
        .then(() => {
          sendConfirmationMail({ email, name, temporaryToken: updatedToken });

          res.status(201).json(VERIFICATION_MSG);
        })
        .catch(err => res.status(500).json({ ...SERVER_ERROR, err }));
    })
    .catch(err => res.status(500).json({ ...SERVER_ERROR, err }));
};

module.exports = resendTokenRoute;
