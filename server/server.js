const express = require('express');
var cors = require('cors') 
const app = express()
app.use(cors()) 
const PORT = 5000;


app.get('/test2', (req, res) => {
	res.send('test2')
})

app.get('/test', (req, res) => {
	res.json({
		status: "200",
		data: "test from nodejs"
	})
})

app.listen(PORT, () => { 
	console.log(`server started on ${PORT}`)}
)
