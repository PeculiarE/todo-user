const {
  addNewUser, getSingleUserByEmail,
} = require('./user');
const {
  addNewTodo,
  getSingleTodoById,
  getSingleTodoByTitle,
  updateSingleTodo,
  deleteTodo,
  getAllTodos,
  getAllTodosForASingleUser,
} = require('./todo');

module.exports = {
  addNewUser,
  getSingleUserByEmail,
  addNewTodo,
  getSingleTodoById,
  getSingleTodoByTitle,
  updateSingleTodo,
  deleteTodo,
  getAllTodos,
  getAllTodosForASingleUser,
};
