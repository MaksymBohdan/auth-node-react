const Person = require('../models/person');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const signupRoute = (req, res) => {
  const { name, email, password } = req.body;

  Person.find({ email })
    .exec()
    .then(person => {
      if (person.length > 0) return res.status(409).json({ status: 'person exists' });

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
          .then(newPerson => res.status(201).json({ person: newPerson }))
          .catch(err => res.status(500).json({ error: err }));
      });
    });
};

module.exports = signupRoute;
