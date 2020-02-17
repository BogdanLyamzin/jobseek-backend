const Sphere = require("../../models/AdminPage/Sphere");

module.exports = (app) => {
    app.get('/spheres/:id', (req, res) => {
        Sphere.findById(req.params.id, (err, oneSphere) => {
            if (err) res.send({
                status: "error",
                message: 'Не удаллось получить сферу'
            });
            
            else res.send({
                status: "Success",
                result: oneSphere,
            });
        });
    });
};