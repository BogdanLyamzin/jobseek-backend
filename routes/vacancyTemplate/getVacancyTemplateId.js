const VacancyTemplate = require("../../models/AdminPage/vacancyTemplate");

module.exports = (app) => {
    app.get('/vacancy-template/:id', (req, res) => {
        VacancyTemplate.findById(req.params.id, (err, oneVacancy) => {
            if (err) res.send({
                status: "error",
                message: 'Не удаллось получить вакансию'
            });
            
            else res.send({
                status: "Success",
                result: oneVacancy,
            });
        });
    });
};