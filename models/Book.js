const {Schema, model} = require("mongoose");

const Book = Schema({
    name: {
        type: String, 
        required: true
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "Author",
        required: true
    }
});

module.exports = model("Book", Book);