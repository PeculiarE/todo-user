const Joi = require("joi");
const { signUpSchema, loginSchema }  = require("../validation");
const { getSingleUserByEmail } = require("../services");

const validateSignUp = (req, res, next) => {
    try {
        const { error } = signUpSchema.validate(req.body);
        if (!error) {
            return next()
        }
        res.status(400).json({
            status: 'Fail',
            message: error.message,
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: 'Something went wrong'
        })
    }
};
const checkIfUserExists = (req, res, next) => {
    try {
        const user = getSingleUserByEmail(req.body.email);
        if (!user) {
            return next()
        }
        res.status(409).json({
            status: 'Fail',
            message: 'User already exists',
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: 'Something went wrong'
        })
    }
};
const validateLogin = (req, res, next) => {
    try {
        const { error } = loginSchema.validate(req.body);
        if (!error) {
            return next()
        }
        res.status(400).json({
            status: 'Fail',
            message: error.message,
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: 'Something went wrong'
        })
    }
};

module.exports = { validateSignUp, checkIfUserExists, validateLogin };