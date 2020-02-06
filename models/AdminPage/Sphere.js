const mongoose = require('mongoose');

module.exports = mongoose.model("Spheres",{
    sphereName: {
        type: String,
        required: true,
    }
});