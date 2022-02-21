const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    age: String,
    dob: String
})

module.exports = mongoose.model('users', userSchema)