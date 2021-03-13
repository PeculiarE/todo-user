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
    const { err, data } = verifyToken(token);
    if (err) {
      return res.status(401).json({
        status: 'Fail',
        message: 'You need to be signed in',
      });
    }
    req.user = data;
    return next();
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};
const adminAccessValidator = (req, res, next) => {
  try {
    if (req.user.is_admin) {
      return next();
    }
    return res.status(403).json({
      status: 'Fail',
      message: 'Only admins can access this.',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};

module.exports = { authenticate, adminAccessValidator };
