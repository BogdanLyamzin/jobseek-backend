const {Schema, model} = require("mongoose");

const Candidate = Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        min: 9,
        max: 11
    },
    repositoryLink: {
        type: String,
        required: false
    },
    facebookLink: {
        type: String,
        required: false
    },
    linkedinLink: {
        type: String,
        required: false
    },
    resumeJobs:{
        type: Object,
        required: true
    },
    levelEng: {
        type: Array,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    }
});



module.exports = model ("Candidate", Candidate);
