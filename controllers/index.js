const { registerUser, loginUser } = require('./user');
const {
  addTodo,
  fetchTodo,
  updateTitleOfTodo,
  deleteTheTodo,
  updateStatusOfTodo,
  allTodosForSingleUser,
  adminAllTodos,
} = require('./todo');

module.exports = {
  registerUser,
  loginUser,
  addTodo,
  fetchTodo,
  updateTitleOfTodo,
  deleteTheTodo,
  updateStatusOfTodo,
  allTodosForSingleUser,
  adminAllTodos,
};
