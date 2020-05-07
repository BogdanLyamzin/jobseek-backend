const { Schema } = require("mongoose");

const Category = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
  parentId: {
    type: Array,
    required: true,
  },
}, { _id : false }, { versionKey: false });

module.exports = Category;
