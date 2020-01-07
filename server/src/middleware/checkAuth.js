const jwt = require('jsonwebtoken');
const confiq = require('../../config');

const checkAuth = (req, res, next) => {
  return jwt.verify(req.body.token, confiq.secretKey, (err, decoded) => {
    if (err) return res.status(401).json({ status: 'Auth failed' });

    console.log('decoded', decoded);

    // req.userDecoded = decoded;

    next();
  });
};

module.exports = checkAuth;
