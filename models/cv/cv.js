const { Schema, model } = require("mongoose");

const SentReceived = require('../subSchema/SentRecived');

const Cv = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Candidate",
    required: true,
  },
  activeCV: {
    type: Boolean,
    required: true,
    default: true,
  },
  cvSkill: {
    type: Array,
    required: true,
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
