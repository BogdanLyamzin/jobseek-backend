const Skill = require("../../models/AdminPage/Skill");

module.exports = (app, passport) => {
    app.delete('/skills/:id', passport, async (req, res) => {

        try {
            const result = await Skill.findByIdAndDelete(req.params.id);
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
