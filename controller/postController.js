const postService = require('../services/postService');

module.exports.createPost = async (req, res) => {
    const postData = await postService.create(req.body);
    res.send(postData);
}

module.exports.getAllPosts = async (req, res) => {
    const postList = await postService.getAll();
    res.send(postList);
}

module.exports.updatePost = async (req, res) => {
    const updatedPost = await postService.update(req.params, req.body);
    res.send(updatedPost);
}
