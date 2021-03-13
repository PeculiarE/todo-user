const { generateUUID } = require('../utils');
const db = require('../db/setup');
const {
  insertTodo, fetchAllTodos, fetchAllTodosForSingleUser, fetchSingleTodoById,
} = require('../db/queries/todo');

const addNewTodo = async (data, userId) => {
  const id = generateUUID();
  const { title } = data;
  return db.one(insertTodo, [id, title, userId]);
};

const getAllTodos = async () => db.manyOrNone(fetchAllTodos);

const getAllTodosForASingleUser = async (userId) => (
  db.manyOrNone(fetchAllTodosForSingleUser, [userId])
);

const getSingleTodoById = async (todoId) => db.oneOrNone(fetchSingleTodoById, [todoId]);

const getSingleTodoByTitle = (title) => (
  todoArray.find((el) => (
    el.title.toLowerCase() === title.toLowerCase()
  ))
);

const getTodoIndex = (id) => todoArray.findIndex((el) => el.id === id);

const updateSingleTodo = (data, id) => {
  const todoDetails = getSingleTodoById(id);
  const updatedTodo = {
    ...todoDetails,
    ...data,
  };
  const index = getTodoIndex(id);
  todoArray[index] = updatedTodo;
  return updatedTodo;
};

const deleteTodo = (id) => {
  const index = getTodoIndex(id);
  return todoArray.splice(index, 1);
};

module.exports = {
  addNewTodo,
  getSingleTodoById,
  getSingleTodoByTitle,
  updateSingleTodo,
  deleteTodo,
  getAllTodos,
  getAllTodosForASingleUser,
};
