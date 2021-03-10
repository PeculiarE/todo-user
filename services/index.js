const { addNewUser, getSingleUserById, getSingleUserByEmail, updateSingleUserProfile, deleteUser } = require("./user");
const { addNewTodo, getSingleTodoById, getSingleTodoByTitle, updateSingleTodo, deleteTodo } = require("./todo");

module.exports = { 
    addNewUser,
    getSingleUserById,
    getSingleUserByEmail,
    updateSingleUserProfile,
    deleteUser,
    addNewTodo,
    getSingleTodoById,
    getSingleTodoByTitle,
    updateSingleTodo,
    deleteTodo 
};