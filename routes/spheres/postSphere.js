const Sphere = require("../../models/AdminPage/Sphere");

module.exports = (app, passport) => {
    app.post('/spheres', passport, async (req, res) => {
        const sphere = new Sphere({
            sphereName: req.body.sphereName,
        });

        try {
            const result = await sphere.save();
            res.send({
                status: "Success",
                result: result,
            });
        } catch(err) {
            res.send({
                status: "Error",
                message: err,
            });
        }
    });
};