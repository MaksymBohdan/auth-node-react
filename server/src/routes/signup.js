const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Person = require('../models/person');
const { createToken } = require('../utils/tokenUtils');
const sendConfirmationMail = require('../utils/sendMailUtils');
const {
  VERIFICATION_MSG,
  PERSON_EXIST,
  SERVER_ERROR
} = require('../helpers/messages');

const signupRoute = (req, res) => {
  const { name, email, password } = req.body;

  Person.findOne({ email })
    .then(person => {
      if (person) return res.status(409).json(PERSON_EXIST);

      bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(501).json(SERVER_ERROR);

        const temporaryToken = createToken({ email });
        const person = new Person({
          _id: new mongoose.Types.ObjectId(),
          name,
          email,
          password: hash,
          temporaryToken
        });

        person
          .save()
          .then(({ _doc: { email, name } }) => {
            sendConfirmationMail({ email, name, temporaryToken });

            res.status(201).json(VERIFICATION_MSG);
          })
          .catch(() => res.status(501).json(SERVER_ERROR));
      });
    })
    .catch(() => res.status(501).json(SERVER_ERROR));
};

module.exports = signupRoute;
