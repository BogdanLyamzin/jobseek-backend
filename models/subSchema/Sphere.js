const { Schema } = require("mongoose");

const Sphere = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: "Sphere",
    required: true,
  },
  sphereName: {
    type: String,
    required: true,
  },
}, { _id : false }, { versionKey: false });

module.exports = Sphere;
