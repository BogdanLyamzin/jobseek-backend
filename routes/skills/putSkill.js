const Skill = require("../../models/AdminPage/Skill");

module.exports = (app, passport) => {
    app.put('/skills/:id', passport, async (req, res) => {

        try {
            const result = await Skill.findByIdAndUpdate(req.params.id, req.body);
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