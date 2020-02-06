const mongoose = require('mongoose');

module.exports = mongoose.model("Profession", {
    professionName: {
        type: String,
        required: true,
    },
    sphereId: {
        type: mongoose.ObjectId,
        ref: 'Spheres',
    }
});