const mongoose = require('mongoose');

module.exports = mongoose.model("Category", {
    categoryName: {
        type: String,
        required: true,
    },
    parentId: {
        type: mongoose.ObjectId,
        ref: 'VacancyTemplate' || "Category",
    }
});