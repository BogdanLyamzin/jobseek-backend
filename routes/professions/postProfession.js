const Profession = require("../../models/AdminPage/Profession");

module.exports = (app) => {
    app.post('/professions', (req, res) => {
        const profession = new Profession({
            professionName: req.body.professionName,
            sphereId: req.body.sphereId,
        });
        profession.save((err, data) => {
            if (err) res.send({
                status: "error",
                message: "Не удалось сохранить професию"
            });
            
            else res.send({
                status: "Success",
                result: data,
            });
        });
    });
};
