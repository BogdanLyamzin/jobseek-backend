const Skill = require("../../models/AdminPage/Skill");

module.exports = (app) => {
    app.delete('/skills/:id', (req, res) => {
        Skill.findByIdAndDelete(req.params.id, (err) => {
            if (err) res.send({status: "error"});
            
            else res.send({
                status: "Success",
            });
        });
    });
};
