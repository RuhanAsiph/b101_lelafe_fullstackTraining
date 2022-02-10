const { application } = require('express');
const express = require('express')

const router = express.Router();

const userDB = [
    {
        email: "abc@abc",
        password: "abc"
    }
]

//for login
router.post('/login', (req,res) => {
    const authModel = req.body
    const userFound = userDB.find((user) => user.email === authModel.email && user.password === authModel.password)
    console.log(userFound)
    if(userFound){
        res.json({
            status: 200,
            data: "user authenticated"
        })
    } else {
        res.json({
            status: 400,
            data: "please register"
        })
    }
})

//for register
router.post('/register', (req, res) => {
    //how are we passing req.body?
    let userModel = req.body
    const isExists = userDB.some((user) => user.email === userModel.email)
    if (!isExists) {
        userDB.push(userModel)
        res.json({
            status: 200,
            data: "user successfully registered"
        })
    } else {
        res.json({
            status: 400,
            data: "user already exists"
        })
    }
})

//for update 
//for update()
router.put('/update-user/:email', (req, res) => {
	const email = req.params.email
	const updatedUserModel = req.body
	let index = userDB.findIndex((element) => element.email === email)
    if (index != -1) {
      userDB[index] = updatedUserModel;
	  res.json({
		status: 200,
		data: "user sucess fully updated"
	  })
    } else {
		res.json({
			status: 400,
			data: "user not found"
		})
    }
 })

//get user by email ()
 router.get('/get-user/:email', (req, res) => {
	 const email = req.params.email
	 const user = userDB.find((user) => user.email === email)
    if (user) {
     res.json({
		 status: 200,
		 data: user
	 })
    } else {
      res.json({
		status: 400,  
		data: "user not found"
	  })
    }
 })

//delete user
router.delete('/delete-user/:email', (req, res) => {
    const email = req.params.email
    let index = userDB.findIndex((element) => element.email === email)
    if (index > -1) {
        userDB.splice(index, 1)
        res.json({
            status: 200,
            data: "successfully removed"
        })
    } else {
        res.json({
            status: 400, 
            data: "error, lost index"
        })
    }
})

//custom functions
router.get('/get-users', (req, res) => {
    //how are we using this
    res.json({
        status: 200,
        data: userDB
    })
})
module.exports = router
