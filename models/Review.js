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
    candidateName: {
        type: String,
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
},  {versionKey: false});


module.exports = model("Review", Review);
