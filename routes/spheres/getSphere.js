const Sphere = require("../../models/AdminPage/Sphere");

module.exports = (app) => {
    app.get('/spheres', (req, res) => {
        Sphere.find({}, (err, allSpheres) => {
            if (err) res.send({
                status: "error",
                message: 'Не удалось почулить все сферы'
            });

            else res.send({
                status: "Success",
                result: allSpheres});
        });
    });
};