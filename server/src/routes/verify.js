const Person = require('../models/person');
const jwt = require('jsonwebtoken');
const confiq = require('../../config');
const {
  SERVER_ERROR,
  STATUS_ERROR,
  STATUS_SUCCESS
} = require('../helpers/messages');

const verifyRoute = (req, res) => {
  const { token } = req.body;

  Person.findOne({ temporaryToken: token })
    .then(person => {
      if (!person) return res.status(409).json(STATUS_ERROR);

      jwt.verify(token, confiq.secretKey, (err, { email }) => {
        if (err) return res.status(409).json(STATUS_ERROR);

        Person.findOneAndUpdate(
          { email },
          { active: true, $unset: { temporaryToken: 1 } }
        )
          .then(res.status(200).json(STATUS_SUCCESS))
          .catch(() => res.status(501).json(SERVER_ERROR));
      });
    })
    .catch(() => res.status(501).json(SERVER_ERROR));
};

module.exports = verifyRoute;
