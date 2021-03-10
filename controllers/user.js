const { addNewUser, getSingleUserByEmail } = require("../services");

const registerUser = (req, res) => {
    try {
        addNewUser(req.body)
        res.status(201).json({
            status: 'Success',
            message: 'Registration successful'
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: 'Something went wrong'
        })
    }
};

const loginUser = (req, res) => {
    try {
        const { email, password } = req.body;
        const user = getSingleUserByEmail(email);

        if (user && user.password === password) {
            res.status(201).json({
                status: 'Success',
                message: 'Login successful'
            })  
        }
        res.status(400).json({
            status: 'Fail',
            message: 'Invalid login details'
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: 'Something went wrong'
        })
    }
};

module.exports = { registerUser, loginUser };