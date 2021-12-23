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
        type: String
    },
    address : {
        country: String,
        city: String
    },
    description : String,
    friendsIds : [String]
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = { UserModel };