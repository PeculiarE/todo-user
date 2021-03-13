const {
  addNewTodo,
  updateSingleTodo,
  deleteTodo,
  getAllTodos,
  getAllTodosForASingleUser,
} = require('../services');

const addTodo = async (req, res) => {
  try {
    const todo = await addNewTodo(req.body, req.user.id);
    res.status(201).json({
      status: 'Success',
      message: 'Todo added successfully',
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};

const fetchTodo = (req, res) => {
  try {
    res.status(200).json({
      status: 'Success',
      message: 'Todo fetched successfully',
      data: req.todo,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};
const updateTodo = (req, res) => {
  try {
    const theUpdatedTodo = updateSingleTodo(req.body, req.todo.id);
    res.status(200).json({
      status: 'Success',
      message: 'Todo updated successfully',
      data: theUpdatedTodo,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};
const deleteTheTodo = (req, res) => {
  try {
    deleteTodo(req.todo.id);
    res.status(200).json({
      status: 'Success',
      message: 'Todo deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};

const allTodosForSingleUser = async (req, res) => {
  try {
    const todoList = await getAllTodosForASingleUser(req.user.id);
    res.status(200).json({
      status: 'Success',
      message: 'List of todos fetched successfully',
      data: todoList,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};
const adminAllTodos = async (req, res) => {
  try {
    const todoListAdmin = await getAllTodos();
    res.status(200).json({
      status: 'Success',
      message: 'All Todos fetched successfully',
      data: todoListAdmin,
    });
  } catch (error) {
    res.status(500).json({
      status: 'Fail',
      message: 'Something went wrong',
    });
  }
};

module.exports = {
  addTodo,
  fetchTodo,
  updateTodo,
  deleteTheTodo,
  allTodosForSingleUser,
  adminAllTodos,
};
