const VacancyTemplate = require("../../models/AdminPage/vacancyTemplate");

module.exports = (app) => {
    app.get('/vacancy-template', (req, res) => {
        VacancyTemplate.find({}, (err, allVacancies) => {
            if (err) res.send({
                status: "error",
                message: 'Не удалось почулить все вакансии'
            });

            else res.send({status: "Success", result: allVacancies});
        });
    });
};