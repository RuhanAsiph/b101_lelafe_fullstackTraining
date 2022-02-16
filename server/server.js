const express = require('express');
var cors = require('cors')
const app = express()
app.use(cors())
const PORT = 5000;
const userRouter = require('./routes/userRouter')
const mongoose = require('mongoose')

const config = require('./env/config')

mongoose.connect('mongodb://0.0.0.0:27017/user', { useNewUrlParser: true, useUnifiedTopology: true }) .then(() => console.log('connection created successful')) .catch((err) => console.error(err)); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//routes
//mvc pattern 
app.use('/user', userRouter)



app.listen(PORT, () => {
	console.log(`server started on ${PORT}`)
}
)
