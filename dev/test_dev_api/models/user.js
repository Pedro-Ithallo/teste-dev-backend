const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    helathProblem: {
        type: String,
        required: true
    },
    healthProblemGrade: {
        type: Number,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    lastUpdate: {
        type: Date,
        required: true,
        default: Date.now
    },


})


module.exports = mongoose.model('user', userSchema)