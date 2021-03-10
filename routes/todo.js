const { Router } = require('express');
const { addTodo } = require('../controllers');
const { validateTodoAddition, checkIfTodoExists } = require('../middlewares');

const todoRouter = Router();

todoRouter.post('/add', validateTodoAddition, checkIfTodoExists, addTodo);

module.exports = todoRouter;