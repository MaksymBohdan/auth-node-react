const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Person = require('../models/person');
const { createToken } = require('../utils/tokenUtils');

const signupRoute = (req, res) => {
  const { name, email, password } = req.body;

  Person.find({ email })
    .exec()
    .then(([person]) => {
      if (person)
        return res.status(409).json({ status: 'Person already exists' });

      bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ error: err });

        const person = new Person({
          _id: new mongoose.Types.ObjectId(),
          name,
          email,
          password: hash
        });

        person
          .save()
          .then(newPerson => {
            const {
              _doc: { email, name, _id }
            } = newPerson;

            res.status(201).json({
              person: { email, name, _id },
              token: createToken({ email, name, _id })
            });
          })
          .catch(err => {
            return res.status(500).json({ error: err, status: 'Server error' });
          });
      });
    })
    .catch(err => {
      return res.status(500).json({ error: err, status: 'Server error' });
    });
};

module.exports = signupRoute;
