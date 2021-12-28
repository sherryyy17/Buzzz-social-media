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
        likedBy: {
            type: [String]
        },
        dislikedBy: {
            type: [String]
        }
    },
    comments: [
        {
            commentedBy: String,
            message: String
        }
    ]
},{
    timestamps: true
});

const PostModel = mongoose.model('post', PostSchema);

module.exports = { PostModel };