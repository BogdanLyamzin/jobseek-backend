const Profession = require("../../models/AdminPage/Profession");

module.exports = (app, passport) => {
    app.get('/professions', passport, async (req, res) => {

        try {
            const result = await Profession.find(req.query);
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