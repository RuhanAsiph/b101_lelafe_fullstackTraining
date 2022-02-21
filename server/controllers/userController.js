
const e = require('express')
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
    userModel.save((err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.json({
                status: 200,
                data: "user successfully registered"
            })
            console.log(data)
        }
    })
}

//update controller
exports.update = (req, res) => {
	const id = req.params.id
	const updatedUserModel = req.body
    
	// let index = userDB.findIndex((element) => element.email === email)
    // if (index != -1) {
    //   userDB[index] = updatedUserModel;
	//   res.json({
	// 	status: 200,
	// 	data: "user sucess fully updated"
	//   })
    // } else {
	// 	res.json({
	// 		status: 400,
	// 		data: "user not found"
	// 	})
    //}
 }

//get user controller
 exports.getuser = (req, res) => {
    const id = req.params.id
//     const user = userDB.find((user) => user.email === email)
//    if (user) {
//     res.json({
//         status: 200,
//         data: user
//     })
//    } else {
//      res.json({
//        status: 400,  
//        data: "user not found"
//      })
//    }
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


