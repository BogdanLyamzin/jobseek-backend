const Skill = require("../../models/AdminPage/Skill");

module.exports = (app) => {
    app.get('/skills', (req, res) => {
        Skill.find(req.query, (err, allSkills) => {
            if (err) res.send({
                status: "error",
                message: 'Не удалось почулить все скиллы'
            });

            else res.send({status: "Success", result: allSkills});
        });
    });
};
