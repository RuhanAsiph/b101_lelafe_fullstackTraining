const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');


//for login
router.post('/login', userController.login)

//for register
router.post('/register', userController.register)

//for update()
router.put('/update-user/:id', userController.update)

//get user by email ()
router.get('/get-user/:id', userController.getuser)

//delete user
router.delete('/delete-user/:id', userController.deleteuser)

//custom functions
 router.get('/get-users', userController.getusers)

// router.get('/test', userController.test)

module.exports = router

