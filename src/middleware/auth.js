const { verify } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.split(' ')[1];

  return verify(token, process.env.SECRET_JWT, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'unauthorized' });

    return next();
  });
};
