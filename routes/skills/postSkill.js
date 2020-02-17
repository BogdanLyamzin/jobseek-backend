const Skill = require("../../models/AdminPage/Skill");

module.exports = (app) => {
    app.post('/skills', (req, res) => {
        const skill = new Skill({
            skillName: req.body.skillName,
            categoryId: req.body.categoryId,
        });
        skill.save((err, data) => {
            if (err) res.send({
                status: "error",
                message: "Не удалось сохранить скилл"
            });
            
            else res.send({
                status: "Success",
                result: data,
            });
        });
    });
};

