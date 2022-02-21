
const express = require('express')
//const userModel = require('../models/user.model')
const User = require('../models/user.model')


//login controller
exports.login = (req, res) => {
    const authModel = req.body
    User.findOne({ email: authModel.email, password: authModel.password }, (err, user) => {
        if (err) {
            res.send(error)
        } else if (!user) {
            res.json({
                status: 400,
                data: "please register"
            })
        } else {
            res.json({
                status: 200,
                data: "user authenticated"
            })
        }

    })
}

//register controller
exports.register = (req, res) => {
    //how to access the db?
    userModel = new User(req.body)
    User.findOne({ email: userModel.email}, (err, user) => {
        console.log(user)
        if (user) {
            res.json({
                status: 400, 
                data: "user already exists"
            })
        } else if (!user) {
            userModel.save((err, data) => {
                if (err) {
                    res.send(err)
                } else {
                    res.json({
                        status: 200,
                        data: "user successfully registered"
                    })
                    console.log(user)
                }
            })
        } else if (err) {
            console.log(err)
        }
    })
}
   


//update controller
exports.update = (req, res) => {
	const id = req.params.id
	const updatedUserModel = req.body
    User.findOneAndUpdate({_id: id}, updatedUserModel, (err, data) => {
        if (data) {
            res.json({
                status: 200, 
                data: "success"
            })
        }

        else if (!data) {
            res.json({
                status: 400,
                data: "no such user exists"
            })

        }

        else {
            console.log(err)
        }
    })
 }

//get user controller
 exports.getuser = (req, res) => {
    const id = req.params.id
  
    User.findById(id).then(userFound => {
        if(userFound) {
            
            return res.json({
                status: 200, 
                data: userFound
            })
        }
        return res.json({
            status: 400,
            data: "user not found"
        })
    })
 }
//delete user controller
exports.deleteuser = (req, res) => {
    const id = req.params.id
    User.deleteOne({_id: id}, (err) => {
        if (err) {
            res.json({
                status: 400,
                data: err
            })
        } else {
            res.json({
                status: 200,
                data: "successfully removed"
            })
        }
    })
}
//get users controller
exports.getusers = (req, res) => {
    User.find({}, (err, data) => {
        if (err) {
            res.send("error")
        } else {
            res.json({
                status: 200,
                data: data
            })
        }
        
    })
}


