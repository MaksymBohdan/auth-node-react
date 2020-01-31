const jwt = require('jsonwebtoken');
const confiq = require('../../config');

const createToken = params => {
  return jwt.sign(params, confiq.secretKey, {
    expiresIn: '2h',
  });
};

module.exports = {
  createToken,
};
