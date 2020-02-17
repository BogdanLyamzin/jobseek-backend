const VacancyTemplate = require("../../models/AdminPage/vacancyTemplate");

module.exports = (app) => {
    app.delete('/vacancy-template/:id', (req, res) => {
        VacancyTemplate.findByIdAndDelete(req.params.id, (err) => {
            if (err) res.send({status: "error"});
            
            else res.send({
                status: "Success",
            });
        });
    });
};