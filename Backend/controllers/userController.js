const userService = require("../services/userService.js");

const register = async (req,res) => {
    try {
const userData = req.body;
console.log(userData);
const user = await userService.registerUser(userData);

res.status(201).json({
    message:"user registered successfully",
    userId:user._id,
});
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
};

const login = async (req,res) => {
    try {
const userData = req.body;
const {userId, token} = await userService.loginUser(userData);


res.status(200).json({
    message : "user loggedIn successfully",
    token,
    userId
})

    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
};

module.exports = {register, login};