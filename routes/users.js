const router = require('express').Router();
const userController = require('../controller/userController');

router.post('/api/users',userController.createUser);
router.get('/api/users',userController.getAllUsers);
router.get('/api/users/:id', userController.getUserById);
router.patch('/api/users/:id', userController.updateUser);
router.delete('/api/users/:id', userController.deleteUser);

module.exports = router;