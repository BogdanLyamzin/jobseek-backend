const { Schema, model } = require("mongoose");

const Report = Schema({
  name: {
    type: String,
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
  reviewId: {
    type: Schema.Types.ObjectId,
    ref: "Review",
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
}, { versionKey: false });

module.exports = model("Report", Report);
