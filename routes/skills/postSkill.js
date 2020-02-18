const Skill = require("../../models/AdminPage/Skill");

module.exports = (app) => {
    app.post('/skills', async (req, res) => {
        const skill = new Skill({
            skillName: req.body.skillName,
            categoryId: req.body.categoryId,
        });

        try {
            const result = await skill.save();
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

