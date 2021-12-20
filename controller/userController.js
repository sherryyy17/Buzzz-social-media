const userService = require('../services/userService');

module.exports.createUser = async (req, res) => {
    const data = await userService.create(req.body);
    res.send(data);
};

module.exports.getAllUsers = async (req, res) => {
    const userList = await userService.getAll();
    res.send(userList);
};

module.exports.getUserById = async (req, res) => {
    const user = await userService.getUser(req.params);
    res.send(user);
};

module.exports.updateUser = async (req, res) => {
    const updatedUser = await userService.update(req.params, req.body);
    res.send(updatedUser);
};

module.exports.deleteUser = async (req,res) => {
    const deletedUser = await userService.delete(req.params);
    res.send(deletedUser);
};