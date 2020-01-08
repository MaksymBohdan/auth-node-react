const jwt = require('jsonwebtoken');
const confiq = require('../../config');

const createToken = params => {
  return jwt.sign(params, confiq.secretKey, {
    expiresIn: '1h'
  });
};

module.exports = {
  createToken
};
