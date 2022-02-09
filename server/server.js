const express = require('express');
var cors = require('cors')
const app = express()
app.use(cors())
const PORT = 5000;
const userRouter = require('./routes/userRouter')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/user', userRouter)

const userDB = [{
	email: "abc@abc",
	password: "abc"
}
]

//for login
app.post('/login', (req, res) => {
	const authModel = req.body
	const userFound = userDB.find((user) => user.email === authModel.email && user.password === authModel.password )
    if (userFound) {
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

//for register()
app.post('/register', (req, res) => {
	let userModel = req.body

	const isExists = userDB.some((user) => user.email === userModel.email)
	
    if (!isExists) {
     userDB.push(userModel)
	 
     res.json({
		 status: 200,
		 data: "user sucess fully registered"
	 })
   	} else {
     res.json({
		 status: 400,
		 data:"user already exists"
	 })
   	}
	
})

//for update()
app.put('/update-user/:email', (req, res) => {
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
 app.get('/get-user/:email', (req, res) => {
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
app.delete('/delete-user/:email', (req, res) => {
	const email = req.params.email
	let index = userDB.findIndex((element) => element.email === email)
	console.log(index)
	//? logic
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

app.get('/get-users', (req,res) => {
	res.json({
		status: 200,
		data: userDB
	})
		
	  
})

//custom function 


app.listen(PORT, () => {
	console.log(`server started on ${PORT}`)
}
)
