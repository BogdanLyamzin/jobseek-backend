const {Schema, model } = require('mongoose');
const adminSchema = new Schema({
    login: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        min: 6
    }
});

module.exports = model('Admin', adminSchema );