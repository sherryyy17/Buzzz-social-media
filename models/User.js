const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    googleId: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = { UserModel };