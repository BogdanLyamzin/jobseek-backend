const Sphere = require("../../models/AdminPage/Sphere");

module.exports = (app, passport) => {
    app.put('/spheres/:id', passport, async (req, res) => {

        try {
            const result = await Sphere.findByIdAndUpdate(req.params.id, req.body);
            res.send({
                status: "Success",
                result: result,
            });
        } catch (err) {
            res.send({
                status: "Error",
                message: err,
            });
        }

    });
};