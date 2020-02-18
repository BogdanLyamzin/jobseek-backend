const VacancyTemplate = require("../../models/AdminPage/vacancyTemplate");

module.exports = (app) => {
    app.get('/vacancytemplate', async (req, res) => {

        try {
            const result = await VacancyTemplate.find(req.query);
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