const Profession = require("../../models/AdminPage/Profession");

module.exports = (app) => {
    app.delete('/professions/:id', (req, res) => {
        Profession.findByIdAndDelete(req.params.id, (err) => {
            if (err) res.send({status: "error"});
            
            else res.send({
                status: "Success",
            });
        });
    });
};