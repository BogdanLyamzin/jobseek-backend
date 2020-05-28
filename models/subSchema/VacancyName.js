const { Schema } = require("mongoose");

const VacancyName = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: "VacancyTemplate",
    required: true,
  },
  vacancyName: {
    type: String,
    required: true,
  },
  professionId: {
    type: Schema.Types.ObjectId,
    ref: "Profession",
    required: true,
  }
}, { _id : false }, { versionKey: false });

module.exports = VacancyName;
