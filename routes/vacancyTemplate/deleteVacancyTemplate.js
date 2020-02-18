const VacancyTemplate = require("../../models/AdminPage/vacancyTemplate");

module.exports = (app) => {
    app.delete('/vacancytemplate/:id', async (req, res) => {

        try {
            const result = await VacancyTemplate.findByIdAndDelete(req.params.id);
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