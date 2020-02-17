const Sphere = require("../../models/AdminPage/Sphere");

module.exports = (app) => {
    app.post('/spheres', (req, res) => {
        const sphere = new Sphere({
            sphereName: req.body.sphereName,
        });
        sphere.save((err, data) => {
            if (err) res.send({
                status: "error",
                message: "Не удалось сохранить сферу"
            });
            
            else res.send({
                status: "Success",
                result: data,
            });
        });
    });
};