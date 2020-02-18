const VacancyTemplate = require("../../models/AdminPage/vacancyTemplate");

module.exports = (app) => {
    app.get('/vacancytemplate/:id', async (req, res) => {

        const result = await VacancyTemplate.findById(req.params.id, (err, ctg) => {
            // mongoose.disconnect();
            if (err) return res.send({
                status: "error",
                result: err,
            });
            return ctg;
        });

        res.send({
            status: "success",
            result: result,
        });

    });
};