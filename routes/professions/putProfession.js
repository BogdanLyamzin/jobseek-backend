const Profession = require("../../models/AdminPage/Profession");

module.exports = (app, passport) => {
    app.put('/professions/:id', passport, async (req, res) => {

        try {
            const result = await Profession.findByIdAndUpdate(req.params.id, req.body);
            res.send({
                status: "Success",
                result: result,
            });
        } catch (err) {
            res.send({
                status: "Error",
                message: err,
            });
        }
    });
};