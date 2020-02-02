const axios = require('axios');
const mongoose = require('mongoose');
const Person = require('../models/person');
const { createToken } = require('../utils/tokenUtils');
const { SERVER_ERROR } = require('../helpers/messages');
const confiq = require('../../config');

const fbConnectionRoute = (req, res) => {
  const { accessToken, userID } = req.body;

  axios
    .post(
      `${confiq.fbGraphUrlMain}${accessToken}${confiq.fbGraphUrlRestParams}`,
    )
    .then(({ data }) => {
      const { id, name, email } = data;
      if (id === userID) {
        Person.findOne({ email })
          .then(person => {
            if (person) {
              const { _id } = person;
              return res.status(200).json({
                person: { email, name, _id },
                token: createToken({ email, name, _id }),
              });
            }

            const newPerson = new Person({
              _id: new mongoose.Types.ObjectId(),
              active: true,
              name,
              email,
            });

            return newPerson
              .save()
              .then(
                ({
                  _doc: { email: newPersonEmail, name: newPersonName, _id },
                }) => {
                  return res.status(200).json({
                    person: { email: newPersonEmail, name: newPersonName, _id },
                    token: createToken({
                      email: newPersonEmail,
                      name: newPersonName,
                      _id,
                    }),
                  });
                },
              );
          })
          .catch(err => res.status(500).json({ ...SERVER_ERROR, err }));
      }
    })
    .catch(err => res.status(500).json({ ...SERVER_ERROR, err }));
};

module.exports = fbConnectionRoute;
