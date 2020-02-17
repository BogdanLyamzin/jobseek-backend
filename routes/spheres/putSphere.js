const Sphere = require("../../models/AdminPage/Sphere");

module.exports = (app) => {
    app.put('/spheres/:id', (req, res) => {
        Sphere.findByIdAndUpdate(req.params.id, req.body, (err, updateSphere) => {
            if (err) res.send({
                status: "error",
                message: 'Не удаллось изменить сферу'
            });
            
            else res.send({
                status: "Success",
                result: updateSphere,
            });
        });
    });
};