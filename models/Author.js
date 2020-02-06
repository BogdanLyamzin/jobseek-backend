const {Schema, model} = require("mongoose");

const Author = Schema({
    name: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    }
});

module.exports = model("Author", Author);