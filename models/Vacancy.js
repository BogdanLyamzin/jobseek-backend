const {Schema, model} = require("mongoose");

const Vacancy = Schema({
    vacancyName: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    englishLevel: {
        type: String,
        required: true,
    },
    programmLanguage: {
        // type: mongoose.ObjectId,
        // ref: "language",
        type: String,
        required: true,
    },
    skills: {
        // correct = subSchema
        type: Array,
        required: true,
    },
    employmentType: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    },
    hrId: {
        type: Schema.Types.ObjectId,
        ref: "hr",            
//        type: String,
        required: true,
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: "company",        
//        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = model("Vacancy", Vacancy);