const Skill = require("../../models/AdminPage/Skill");

module.exports = (app, passport) => {
    app.get('/skills', passport, async (req, res) => {

        try {
            const result = await Skill.find(req.query);
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
