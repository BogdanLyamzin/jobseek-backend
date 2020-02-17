const Profession = require("../../models/AdminPage/Profession");

module.exports = (app) => {
    app.get('/professions/:id', (req, res) => {
        Profession.findById(req.params.id, (err, oneProfession) => {
            if (err) res.send({
                status: "error",
                message: 'Не удаллось получить професию'
            });
            
            else res.send({
                status: "Success",
                result: oneProfession,
            });
        });
    });
};