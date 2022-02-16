
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

    // const userFound = userDB.find((user) => user.email === authModel.email && user.password === authModel.password)
    // console.log(userFound)
    // if(userFound){
    //     res.json({
    //         status: 200,
    //         data: "user authenticated"
    //     })
    // } else {
    //     res.json({
    //         status: 400,
    //         data: "please register"
    //     })
    // }
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

    
    //const isExists = User.some((user) => user.email === userModel.email)
    // if (!isExists) {

    // } else if (isExists) {
    //     res.json({
    //         status: 400,
    //         data: "user already exists"
    //     })
    // }
}

//update controller
// exports.update = (req, res) => {
// 	const email = req.params.email
// 	const updatedUserModel = req.body
// 	let index = userDB.findIndex((element) => element.email === email)
//     if (index != -1) {
//       userDB[index] = updatedUserModel;
// 	  res.json({
// 		status: 200,
// 		data: "user sucess fully updated"
// 	  })
//     } else {
// 		res.json({
// 			status: 400,
// 			data: "user not found"
// 		})
//     }
//  }
// //get user controller
//  exports.getuser = (req, res) => {
//     const email = req.params.email
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
// }
//delete user controller
exports.deleteuser = (req, res) => {
    const id = req.params.id
    const user = User.findById(id)
    if (user) {
        user.remove()
        res.json({
            status: 200,
            data: "successfully removed"
        })
    } else {
        res.json({
            status: 400,
            data: "user not found"
        })
    }
    
    // User.delete(email)
    // let index = userDB.findIndex((element) => element.email === email)
    // if (index > -1) {
    //     userDB.splice(index, 1)
    //     res.json({
    //         status: 200,
    //         data: "successfully removed"
    //     })
    // } else {
    //     res.json({
    //         status: 400, 
    //         data: "error, lost index"
    //     })
    // }
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


