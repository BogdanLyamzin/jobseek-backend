const Profession = require("../../models/AdminPage/Profession");

module.exports = (app) => {
    app.put('/professions/:id', (req, res) => {
        Profession.findByIdAndUpdate(req.params.id, req.body, (err, updateProfession) => {
            if (err) res.send({
                status: "error",
                message: 'Не удаллось изменить професию'
            });
            
            else res.send({
                status: "Success",
                result: updateProfession,
            });
        });
    });
};