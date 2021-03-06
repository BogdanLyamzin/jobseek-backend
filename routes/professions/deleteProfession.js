const Profession = require("../../models/AdminPage/Profession");

module.exports = (app, passport) => {
    app.delete('/professions/:id', passport, async (req, res) => {

        try {
            const result = await Profession.findByIdAndDelete(req.params.id);
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