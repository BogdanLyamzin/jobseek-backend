const VacancyTemplate = require("../../models/AdminPage/vacancyTemplate");

module.exports = (app, passport) => {
    app.put('/vacancytemplate/:id', passport, async (req, res) => {

        try {
            const result = await VacancyTemplate.findByIdAndUpdate(req.params.id, req.body);
            res.send({
                status: "Success",
                result: result,
            });
        } catch (err) {
            res.send({
                status: "Error",
                message: err,
            });
        }
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