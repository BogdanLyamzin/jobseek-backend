const { Schema, model } = require("mongoose");
const Skills = require("./subSchema/Skills");

const Vacancy = Schema({
  vacancyName: {
    type: String,
    required: true
  },
  sphere: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  category: {
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
  salary: {
    type: String,
    required: true
  },
  englishLevel: {
    type: String,
    required: true
  },
  skills: [Skills],
  employmentType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  hrId: {
    type: Schema.Types.ObjectId,
    ref: "hr",
    required: true
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "company",
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = model("Vacancy", Vacancy);
