const { Schema } = require("mongoose");

const Skills = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
    min: 0,
    max: 8,
  }
}, { _id : false });

module.exports = Skills;
