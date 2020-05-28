const { Schema } = require("mongoose");

const Profession = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: "Profession",
    required: true,
  },
  professionName: {
    type: String,
    required: true,
  },
  sphereId: {
    type: Schema.Types.ObjectId,
    ref: "Sphere",
    required: true,
  }
}, { _id : false }, { versionKey: false });

module.exports = Profession;
