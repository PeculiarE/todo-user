const { validateSignUp, checkIfUserExists, validateLogin } = require("./user");
const { validateTodoAddition, checkIfTodoExists } = require("./todo");

module.exports = {
    validateSignUp,
    checkIfUserExists,
    validateLogin,
    validateTodoAddition,
    checkIfTodoExists,
}