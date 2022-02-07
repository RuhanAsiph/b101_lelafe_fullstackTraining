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

app.post('/login', (req, res) => {
	const authModel = req.body
	if (authModel.email === "abc@123" && authModel.password === "111") {
		res.json({
			status: 200,
			data: "user Authenticated"
		})
	}
	else {
		res.json({
			status: 409,
			data: "invalid email or password"
		})
	}

})

// app.get('/test/:email', (req, res) => {
// 	const email = req.params.email
// })


app.listen(PORT, () => {
	console.log(`server started on ${PORT}`)
}
)
