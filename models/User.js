const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    googleId: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: String,
    profilePic: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = { UserModel };