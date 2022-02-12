const express = require('express');
var cors = require('cors')
const app = express()
app.use(cors())
const PORT = 5000;
const userRouter = require('./routes/userRouter')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//routes
//mvc pattern 
app.use('/user', userRouter)


app.listen(PORT, () => {
	console.log(`server started on ${PORT}`)
}
)
