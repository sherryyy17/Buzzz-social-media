const postService = require('../services/postService');

module.exports.createPost = async (req, res) => {
    const postData = await postService.create(req.body);
    res.send(postData);
}

module.exports.getAllPosts = async (req, res) => {
    const postList = await postService.getAll();
    res.send(postList);
}

