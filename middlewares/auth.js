const { verifyToken } = require('../utils');

const authenticate = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({
        status: 'Fail',
        message: 'You are not signed in',
      });
    }
    const token = authorization.split(' ')[1];
    const decoded = verifyToken(token);
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(401).json({
      status: 'Fail',
      message: 'You need to be signed in',
    });
  }
};

module.exports = authenticate;
