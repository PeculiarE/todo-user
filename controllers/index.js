const { registerUser, loginUser } = require('./user');
const {
  addTodo,
  fetchTodo,
  updateTodo,
  deleteTheTodo,
  allTodos,
} = require('./todo');

module.exports = {
  registerUser,
  loginUser,
  addTodo,
  fetchTodo,
  updateTodo,
  deleteTheTodo,
  allTodos,
};
