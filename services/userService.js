const { UserModel } = require('../models/User');

module.exports.create = async (item) => {
    const {
        googleId,
        firstName,
        lastName,
        email,
        profilePic
    } = item;
    const user = await UserModel.create({
        googleId,
        firstName,
        lastName,
        email,
        profilePic
    })
    return  { user };
}

module.exports.getAll = async () => {
    const users = await UserModel.find();
    return users;
}

module.exports.getUser = async ({ id }) => {
    const user = await UserModel.findOne({ googleId: id });
    return user;
}

module.exports.update = async ({ id }, userData) => {
    const updUser = await UserModel.findOneAndUpdate({googleId: id}, userData, { new: true});
    return updUser;
}

module.exports.delete = async ({ id }) => {
    const delUser = await UserModel.deleteOne({ googleId: id });
    return delUser;
}