const Skill = require("../../models/AdminPage/Skill");

module.exports = (app) => {
    app.get('/skills/:id', async (req, res) => {

        const result = await Skill.findById(req.params.id, (err, skill) => {
            // mongoose.disconnect();
            if (err) return res.send({
                status: "error",
                result: err,
            });
            return skill;
        });

        res.send({
            status: "success",
            result: result,
        });
    });
};
