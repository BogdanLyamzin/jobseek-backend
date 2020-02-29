const {Schema, model} = require("mongoose");

const Review = Schema({
    companyId: {
        type: Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
    candidateId: {
        type: Schema.Types.ObjectId,
        ref: "Candidate",
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
