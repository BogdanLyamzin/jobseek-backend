const { Schema, model } = require("mongoose");
const Skills = require("../subSchema/Skills");
const SentReceived = require('../subSchema/SentRecived');

const Cv = Schema({
  candidateId: {
    type: Schema.Types.ObjectId,
    ref: "Candidate",
    required: true,
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
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  salary: {
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
  skills: [Skills],
  employmentType: {
    type: String,
    required: true
  },
  englishLevel: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  vacancyName: {
    type: String,
    required: true,
  },
  sent: [SentReceived],
  received: [SentReceived],
  date: {
    type: Date,
    required: true,
    default: Date.now,
  }
});

module.exports = model("Cv", Cv);
