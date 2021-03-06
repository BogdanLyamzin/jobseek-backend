const VacancyTemplate = require("../../models/AdminPage/vacancyTemplate");

module.exports = (app, passport) => {
    app.post('/vacancytemplate', passport, async (req, res) => {

        const vacancy = new VacancyTemplate({
            vacancyName: req.body.vacancyName,
            professionId: req.body.professionId,
        });

        try {
            const result = await vacancy.save();
            res.send({
                status: "Success",
                result: result,
            });
        } catch(err) {
            res.send({
                status: "Error",
                message: err,
            });
        }

    });
};
