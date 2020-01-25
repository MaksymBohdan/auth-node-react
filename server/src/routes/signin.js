const Person = require('../models/person');
const bcrypt = require('bcrypt');
const { createToken } = require('../utils/tokenUtils');
const {
  WRONG_PASSWORD_OR_EMAIL,
  SERVER_ERROR,
  ACCOUNT_NOT_EXIST
} = require('../helpers/messages');

const signinRoute = (req, res) => {
  const { email, password } = req.body;

  Person.findOne({ email })
    .then(person => {
      if (!person) return res.status(404).json(ACCOUNT_NOT_EXIST);

      bcrypt.compare(password, person.password, (err, isPasswordValid) => {
        if (err) return res.status(500).json({ ...SERVER_ERROR, err });

        if (!isPasswordValid)
          return res.status(404).json(WRONG_PASSWORD_OR_EMAIL);

        const { email, name, _id } = person;

        res.status(200).json({
          person: { email, name, _id },
          token: createToken({ email, name, _id })
        });
      });
    })
    .catch(err => res.status(500).json({ ...SERVER_ERROR, err }));
};

module.exports = signinRoute;
