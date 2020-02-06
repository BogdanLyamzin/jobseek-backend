const {Schema, model} = require("mongoose");

const Review = Schema({
    companyId: {
        type: Schema.Types.ObjectId,
        ref: "Company",
//        type: Number,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
//        type: Number,
        required: true,
    },
    reviewTxt: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    mark: {
        type: Number,
        required: true,
    },
},  {versionKey: false});


module.exports = model("Review", Review);
