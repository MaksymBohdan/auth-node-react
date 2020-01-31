const jwt = require('jsonwebtoken');
const Person = require('../models/person');
const confiq = require('../../config');
const {
  SERVER_ERROR,
  STATUS_ERROR,
  STATUS_SUCCESS,
} = require('../helpers/messages');

const verifyRoute = (req, res) => {
  const { token } = req.body;

  Person.findOne({ temporaryToken: token })
    .then(person => {
      if (!person) return res.status(409).json(STATUS_ERROR);

      return jwt.verify(token, confiq.secretKey, (jwtErr, decoded) => {
        if (jwtErr) return res.status(409).json(STATUS_ERROR);

        const { email } = decoded;

        return Person.findOneAndUpdate(
          { email },
          { active: true, $unset: { temporaryToken: 1 } },
        )
          .then(res.status(200).json(STATUS_SUCCESS))

          .catch(err => res.status(500).json({ ...SERVER_ERROR, err }));
      });
    })
    .catch(err => res.status(500).json({ ...SERVER_ERROR, err }));
};

module.exports = verifyRoute;
