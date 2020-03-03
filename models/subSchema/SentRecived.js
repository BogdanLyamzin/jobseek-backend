const { Schema } = require("mongoose");

const SentReceived = new Schema({
  cvId: {
    type: Schema.Types.ObjectId,
    ref: "Cv",
    required: true,
  },
  vacancyId: {
    type: Schema.Types.ObjectId,
    ref: "Vacancy",
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  }
});

module.exports = SentReceived;
