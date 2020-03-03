const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    email:{
        type: String,
        require: true,
        min: 6
    },

    password: {
        type: String,
        require: true,
        min: 6
    },

    type: {
        type: String,
        require: true
    },

    data: {
        type: Date,
        default: Date.now
    },

    resetToken: String,
    resetTokenExp: Date,
    displayName: String,
    socId: String
})

module.exports = model('User', userSchema)