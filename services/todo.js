const { v4: uuidv4 } = require('uuid');
const { todoArray } = require('../models');

const addNewTodo = (data, owner) => {
  const obj = {
    ...data,
    id: uuidv4(),
    isComplete: false,
    ownerEmail: owner,
  };
  todoArray.push(obj);
  return obj;
};

const getSingleTodoById = (id) => todoArray.find((el) => el.id === id);

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

const getAllTodos = () => todoArray;

const getAllTodosForASingleUser = (email) => (
  todoArray.filter((el) => (
    el.ownerEmail === email
  ))
);

module.exports = {
  addNewTodo,
  getSingleTodoById,
  getSingleTodoByTitle,
  updateSingleTodo,
  deleteTodo,
  getAllTodos,
  getAllTodosForASingleUser,
};
