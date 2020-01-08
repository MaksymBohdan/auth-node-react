const Person = require('../models/person');
const bcrypt = require('bcrypt');
const { createToken } = require('../utils/tokenUtils');

const signinRoute = (req, res) => {
  const { email, password } = req.body;

  Person.find({ email })
    .exec()
    .then(([person]) => {
      if (!person)
        return res.status(404).json({ status: 'Wrong email or password' });

      bcrypt.compare(password, person.password, (err, isPasswordValid) => {
        if (err) return res.status(500).json({ error: err });

        if (!isPasswordValid)
          return res.status(404).json({ status: 'Wrong email or password' });

        const { email, name, _id } = person;

        res.status(200).json({
          person: { email, name, _id },
          token: createToken({ email, name, _id })
        });
      });
    })
    .catch(err => {
      return res.status(500).json({ error: err, status: 'Server error' });
    });
};

module.exports = signinRoute;
