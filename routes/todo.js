const { Router } = require('express');
const {
  addTodo,
  fetchTodo,
  updateTodo,
  deleteTheTodo,
  allTodos,
} = require('../controllers');
const {
  authenticate,
  checkIfTodoExists,
  checkIfTodoIsForCurrentUser,
  validateTodoAddition,
  adminAccessValidator,
} = require('../middlewares');

const todoRouter = Router();
todoRouter.use(authenticate);

todoRouter.post('/todo', validateTodoAddition, addTodo);
todoRouter.get('/todo', allTodos);
todoRouter.get('/todos', adminAccessValidator, allTodos);

todoRouter.use('/todo/:todoId', checkIfTodoExists, checkIfTodoIsForCurrentUser);

todoRouter.get('/todo/:todoId', fetchTodo);
todoRouter.put('/todo/:todoId', updateTodo);
todoRouter.delete('/todo/:todoId', deleteTheTodo);

module.exports = todoRouter;
