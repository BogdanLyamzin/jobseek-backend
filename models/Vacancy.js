const { Schema, model } = require("mongoose");

const Skills = require("./subSchema/Skills");
const SentReceived = require('./subSchema/SentRecived');

const Vacancy = Schema({
  vacancyName: {
    type: Object,
    required: true
  },
  sphere: {
    type: Object,
    required: true
  },
  profession: {
    type: Object,
    required: true
  },
  category: {
    type: Object,
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
    ref: "HR",
    required: true
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true
  },
  sent: [SentReceived],
  received: [SentReceived],
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = model("Vacancy", Vacancy);
