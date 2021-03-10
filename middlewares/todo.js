const Joi = require("joi");
const { todoTitleSchema }  = require("../validation");
const { getSingleTodoByTitle } = require("../services");

const validateTodoAddition = (req, res, next) => {
    try {
        const { error } = todoTitleSchema.validate(req.body);
        console.log(req.body)
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

const checkIfTodoExists = (req, res, next) => {
    try {
        const todo = getSingleTodoByTitle(req.body.title);
        if (!todo) {
            return next();
        }
        res.status(409).json({
            status: 'Fail',
            message: 'Task already exists',
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: 'Something went wrong'
        })
    }
};

module.exports = { validateTodoAddition, checkIfTodoExists };