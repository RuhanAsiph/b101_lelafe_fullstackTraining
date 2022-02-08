const express = require('express');
var cors = require('cors')
const app = express()
app.use(cors())
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


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
		res.status(200).json({
			data: "user authenticated"
		})
    } else {
		res.status(400).json({
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
	 
     res.status(200).json({
		 data: "user sucess fully registered"
	 })
   	} else {
     res.status(400).json({
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
	  res.status(200).json({
		data: "user sucess fully updated"
	  })
    } else {
		res.status(400).json({
			data: "user not found"
		})
    }
 })

 //get user by email ()
 app.get('get-user/:email', (req, res) => {
	 const email = req.params.email
	 const user = this.userDB.find((user) => user.email === email)
    if (user) {
     res.status(200).json({
		 data: user
	 })
    } else {
      res.status(400).json({
		  data: "user not found"
	  })
    }
 })


app.listen(PORT, () => {
	console.log(`server started on ${PORT}`)
}
)
