//test
exports.test = (req,res) => {
    
    res.json({
        status: 200, 
        data: "hellow orld"
    })
}

//userDB
const userDB = [
    {
        email: "abc@abc",
        password: "abc"
    },
    {
        email:  "ru@gmail",
        password: "ru"
    }
]


//login controller
exports.login = (req,res) => {
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
}

//register controller
exports.register = (req, res) => {
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
}

//for update controller
exports.update = (req, res) => {
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
 }
// get user controller
 exports.getuser = (req, res) => {
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
}
//delete user controller
exports.deleteuser = (req, res) => {
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
}

exports.getusers = (req, res) => {
    //how are we using this
    res.json({
        status: 200,
        data: userDB
    })
}


