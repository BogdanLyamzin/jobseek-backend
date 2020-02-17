const mongoose = require('mongoose');
// тут має бути щось внятне для конструктора шаблонів
module.exports = mongoose.model("VacancyTemplate", {
    vacancyName: {
        type: String,
        required: true,
    },
    professionId: {
        type: mongoose.ObjectId,
        ref: 'Professions',
    }
});