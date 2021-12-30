const router = require('express').Router();
const postController = require('../controller/postController');

router.post('/api/posts',postController.createPost);
router.get('/api/posts',postController.getAllPosts);
// router.get('/api/posts/:id', postController.getPostById);
router.patch('/api/posts/:id', postController.updatePost);
router.delete('/api/posts/:id', postController.deletePost);

module.exports = router;