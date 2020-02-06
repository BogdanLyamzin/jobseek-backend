const {Schema, model} = require("mongoose");

const Company = Schema({
    companyName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        min: 9,
        max: 11
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    companyWebsiteLink: {
        type: String,
        required: true
    },
    facebookLink: {
        type: String,
        required: true
    },
    linkedinLink: {
        type: String,
        required: true
    },
    companyDescription: {
        type: String,
        required: true
    }
});

module.exports = model("Company", Company);
