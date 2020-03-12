const {Schema, model} = require("mongoose");

const Company = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
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
    website: {
        type: String,
        required: true
    },
    facebookLink: {
        type: String,
    },
    linkedinLink: {
        type: String,
    },
    description: {
        type: String,
        // required: true
    },
    avatar: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    }
});


module.exports = model("Company", Company);
