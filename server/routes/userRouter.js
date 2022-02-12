const { application } = require('express');
const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');


//for login
router.post('/login', userController.login)

//for register
router.post('/register', userController.register)

//for update()
router.put('/update-user/:email', userController.update)

//get user by email ()
 router.get('/get-user/:email', userController.getuser)

//delete user
router.delete('/delete-user/:email', userController.deleteuser)

//custom functions
router.get('/get-users', userController.getusers)

module.exports = router
