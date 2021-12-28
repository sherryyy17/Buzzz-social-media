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
    coverImg: {
        type: String,
        default: ""
    },
    profilePic: {
        type: String
    },
    address : {
        country: {
            type: String,
            default: ""
        },
        city: {
            type: String,
            default: ""
        }
    },
    website: {
        type: String,
        default: ""
    },
    description : {
        type: String,
        default: ""
    },
    friendsIds : [String]
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = { UserModel };