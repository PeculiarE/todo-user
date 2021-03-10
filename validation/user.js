const Joi = require("joi");

const signUpSchema = Joi.object({
    firstName: Joi.string().min(3).max(100).required(),
    lastName: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(7).required(),
    gender: Joi.string().min(3).max(100),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(7).required(),
});

module.exports = { signUpSchema, loginSchema };