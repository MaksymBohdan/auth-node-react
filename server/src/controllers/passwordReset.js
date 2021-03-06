const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Person = require('../models/person');
const confiq = require('../../config');
const {
  SERVER_ERROR,
  INVALID_TOKEN,
  PASSWORD_CHANGED,
} = require('../helpers/messages');

const passwordResetRoute = (req, res) => {
  const { token, password } = req.body;

  Person.findOne({ passwordResetToken: token })
    .then(person => {
      if (!person) return res.status(409).json(INVALID_TOKEN);
      return jwt.verify(token, confiq.secretKey, jwtErr => {
        if (jwtErr) return res.status(409).json(INVALID_TOKEN);

        const hashPassword = bcrypt.hashSync(password, 10);

        return Person.findOneAndUpdate(
          { passwordResetToken: token },
          { password: hashPassword, $unset: { passwordResetToken: 1 } },
        )
          .then(() => res.status(200).json(PASSWORD_CHANGED))
          .catch(err => res.status(500).json({ ...SERVER_ERROR, err }));
      });
    })
    .catch(err => res.status(500).json({ ...SERVER_ERROR, err }));
};

module.exports = passwordResetRoute;
