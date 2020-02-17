const Skill = require("../../models/AdminPage/Skill");

module.exports = (app) => {
    app.put('/skills/:id', (req, res) => {
        Skill.findByIdAndUpdate(req.params.id, req.body, (err, updateSkill) => {
            if (err) res.send({
                status: "error",
                message: 'Не удаллось изменить скилл'
            });
            else res.send({
                status: "Success",
                result: updateSkill,
            });
        });
    });
};