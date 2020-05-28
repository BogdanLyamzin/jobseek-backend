const { Schema, model } = require("mongoose");

const HR = Schema({
  userId: {
    type: Schema.Types.ObjectId
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true
  },
  active: {
    type: Boolean,
    default: true
  },
  avatar: {
    type: String,
    default: null,
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false });

module.exports = model("HR", HR);
