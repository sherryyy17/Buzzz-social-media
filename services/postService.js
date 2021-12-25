const { PostModel } = require('../models/Posts');

module.exports.create = async (post) => {
    const {
        caption,
        images,
        postedBy 
    } = post;
    const newPost = await PostModel.create({
        caption,
        images,
        postedBy
    })
    return { newPost };
}

module.exports.getAll = async () => {
    const posts = await PostModel.find({}, null, { sort :{ createdAt : -1}});
    return posts;
}