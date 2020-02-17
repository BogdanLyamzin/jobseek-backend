const VacancyTemplate = require("../../models/AdminPage/vacancyTemplate");

module.exports = (app) => {
    app.put('/vacancy-template/:id', (req, res) => {
        VacancyTemplate.findByIdAndUpdate(req.params.id, req.body, (err, updateVacancy) => {
            if (err) res.send({
                status: "error",
                message: 'Не удаллось изменить вакансию'
            });
            
            else res.send({
                status: "Success",
                result: updateVacancy,
            });
        });
    });
};