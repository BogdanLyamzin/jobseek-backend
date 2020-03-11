const {Schema, model} = require("mongoose");

const Candidate = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        min: 9,
        max: 11
    },
    repositoryLink: {
        type: String,
        required: false,
    },
    facebookLink: {
        type: String,
        required: false,
    },
    linkedinLink: {
        type: String,
        required: false,
    },
    resumeJobs:{
        type: Object,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    }
});



module.exports = model ("Candidate", Candidate);
