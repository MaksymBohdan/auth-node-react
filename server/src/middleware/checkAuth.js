const jwt = require('jsonwebtoken');
const confiq = require('../../config');

const checkAuth = (req, res, next) => {
  const token = req.body.Authorization.split(' ')[1];

  return jwt.verify(token, confiq.secretKey, (err, decoded) => {
    if (err) return res.status(401).json({ status: 'Auth failed' });

    req.body.personData = decoded;

    return next();
  });
};

module.exports = checkAuth;
