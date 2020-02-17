const VacancyTemplate = require("../../models/AdminPage/vacancyTemplate");

module.exports = (app) => {
    app.post('/vacancy-template', (req, res) => {
        const vacancy = new VacancyTemplate({
            vacancyName: req.body.vacancyName,
            professionId: req.body.professionId,
        });
        vacancy.save((err, data) => {
            if (err) res.send({
                status: "error",
                message: "Не удалось сохранить вакансию"
            });
            
            else res.send({
                status: "Success",
                result: data,
            });
        });
    });
};
