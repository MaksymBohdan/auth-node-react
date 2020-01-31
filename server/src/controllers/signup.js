const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Person = require('../models/person');
const { createToken } = require('../utils/tokenUtils');
const { sendVerificationMail } = require('../utils/mailUtils');
const {
  VERIFICATION_MSG,
  PERSON_EXIST,
  SERVER_ERROR,
} = require('../helpers/messages');

const signupRoute = (req, res) => {
  const { name, email, password } = req.body;

  Person.findOne({ email })
    .then(existingPerson => {
      if (existingPerson) return res.status(409).json(PERSON_EXIST);

      return bcrypt.hash(password, 10, (bcryptErr, hash) => {
        if (bcryptErr)
          return res.status(500).json({ ...SERVER_ERROR, bcryptErr });

        const temporaryToken = createToken({ email });
        const person = new Person({
          _id: new mongoose.Types.ObjectId(),
          name,
          email,
          password: hash,
          temporaryToken,
        });

        return person
          .save()
          .then(({ _doc: { email: newPersonEmail, name: newPersonName } }) => {
            sendVerificationMail({
              email: newPersonEmail,
              name: newPersonName,
              temporaryToken,
            });

            res.status(201).json(VERIFICATION_MSG);
          })
          .catch(err => res.status(500).json({ ...SERVER_ERROR, err }));
      });
    })
    .catch(err => res.status(500).json({ ...SERVER_ERROR, err }));
};

module.exports = signupRoute;
