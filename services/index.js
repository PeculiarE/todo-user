const {
  addNewUser, getSingleUserByEmail,
} = require('./user');
const {
  addNewTodo,
  getSingleTodoById,
  updateSingleTodoTitle,
  deleteSingleTodo,
  getAllTodos,
  getAllTodosForASingleUser,
  updateSingleTodoStatus,
} = require('./todo');

module.exports = {
  addNewUser,
  getSingleUserByEmail,
  addNewTodo,
  getSingleTodoById,
  updateSingleTodoTitle,
  deleteSingleTodo,
  getAllTodos,
  getAllTodosForASingleUser,
  updateSingleTodoStatus,
};
