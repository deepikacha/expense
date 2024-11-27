const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

// POST /add-user
router.post('/register', userController.postAddUser);
router.get('/users', userController.getUser);
router.post('/delete-user', userController.postDeleteUser);


module.exports = router;