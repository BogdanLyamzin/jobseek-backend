const Skill = require("../../models/AdminPage/Skill");

module.exports = (app) => {
    app.get('/skills/:id', (req, res) => {
        Skill.findById(req.params.id, (err, oneSkill) => {
            if (err) res.send({
                status: "error",
                message: 'Не удаллось получить скилл'
            });
            
            else res.send({
                status: "Success",
                result: oneSkill,
            });
        });
    });
};
