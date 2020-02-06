const mongoose = require('mongoose');

module.exports = mongoose.model("Skill", {
    skillName: {
        type: String,
        required: true,
    },
    categoryId: {
        type: mongoose.ObjectId,
        ref: 'Category',
    }
});

