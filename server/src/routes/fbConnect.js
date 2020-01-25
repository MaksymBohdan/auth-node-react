require('dotenv').config();
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const Person = require('../models/person');
const { createToken } = require('../utils/tokenUtils');
const { SERVER_ERROR } = require('../helpers/messages');

const fbConnectionRoute = (req, res) => {
  const { accessToken, userID, email, name } = req.body;
  const { FB_GRAPH_URL_MAIN, FB_GRAPH_URL_REST_PARAMS } = process.env;

  fetch(`${FB_GRAPH_URL_MAIN}${accessToken}${FB_GRAPH_URL_REST_PARAMS}`)
    .then(data => data.json())
    .then(({ id }) => {
      if (id === userID) {
        Person.findOne({ email })
          .then(person => {
            if (person) {
              const { email, name, _id } = person;
              return res.status(200).json({
                person: { email, name, _id },
                token: createToken({ email, name, _id })
              });
            }

            const newPerson = new Person({
              _id: new mongoose.Types.ObjectId(),
              active: true,
              name,
              email
            });

            newPerson.save().then(({ _doc: { email, name, _id } }) => {
              return res.status(200).json({
                person: { email, name, _id },
                token: createToken({ email, name, _id })
              });
            });
          })
          .catch(() => res.status(500).json(SERVER_ERROR));
      }
    })
    .catch(() => res.status(500).json(SERVER_ERROR));
};

module.exports = fbConnectionRoute;
