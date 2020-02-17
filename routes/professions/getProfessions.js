const Profession = require("../../models/AdminPage/Profession");

module.exports = (app) => {
    app.get('/professions', (req, res) => {
        Profession.find({}, (err, allProfessions) => {
            if (err) res.send({
                status: "error",
                message: 'Не удалось почулить все професии'
            });

            else res.send({status: "Success", result: allProfessions});
        });
    });
};