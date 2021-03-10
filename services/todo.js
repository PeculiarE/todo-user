const { todoArray } = require("../models");
const { v4: uuidv4 } = require("uuid");

const addNewTodo = (data) => {
    todoArray.push({
        ...data,
        id: uuidv4(),
        isComplete: false
    });
};

const getSingleTodoById = (id) => todoArray.find((el) => el.id === id);

const getSingleTodoByTitle = (title) => todoArray.find((el) => el.title.toLowerCase() === title.toLowerCase());

const getTodoIndex = (id) => todoArray.findIndex((el) => el.id === id);

const updateSingleTodo = (data, id) => {
    const todoDetails = getSingleTodo(id);
    const updatedTodo = {
        ...data,
        ...todoDetails
    };
    const index = getTodoIndex(id);
    todoArray[index] = updatedTodo;
    return updatedTodo;
};

const deleteTodo = (id) => {
    const index = getTodoIndex(id);
    return todoArray.splice(index, 1);
};

module.exports = { addNewTodo, getSingleTodoById, getSingleTodoByTitle, updateSingleTodo, deleteTodo };