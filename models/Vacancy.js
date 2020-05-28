const { Schema, model } = require("mongoose");

const Skills = require("./subSchema/Skills");
const Sphere = require("./subSchema/Sphere");
const Category = require("./subSchema/Category");
const Profession = require("./subSchema/Profession");
const VacancyName = require("./subSchema/VacancyName");
const SentReceived = require('./subSchema/SentRecived');

const Vacancy = Schema({
  sphere: Sphere,
  category: Category,
  profession: Profession,
  vacancyName: VacancyName,
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
    default: Date.now
  }
}, { versionKey: false });

module.exports = model("Vacancy", Vacancy);
