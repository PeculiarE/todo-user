const { addNewTodo } = require("../services");

const addTodo = (req, res) => {
    try {
        addNewTodo(req.body)
        res.status(201).json({
            status: 'Success',
            message: 'Task added successfully'
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: 'Something went wrong'
        })
    }
};

module.exports = addTodo;