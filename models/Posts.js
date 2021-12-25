const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    caption: {
        type: String,
        required: true
    },
    images: [String],
    postedBy: {
        type: Object,
        required: true
    },
    postReacts: {
        likes: {
            type: Number,
            default: 0
        },
        dislikes: {
            type: Number,
            default: 0
        }
    },
    comments: []
},{
    timestamps: true
});

const PostModel = mongoose.model('post', PostSchema);

module.exports = { PostModel };