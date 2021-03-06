const Sphere = require("../../models/AdminPage/Sphere");

module.exports = (app, passport) => {
    app.get('/spheres/:id', passport, async (req, res) => {

        const result = await Sphere.findById(req.params.id, (err, sph) => {
            // mongoose.disconnect();
            if (err) return res.send({
                status: "error",
                result: err,
            });
            return sph;
        });

        res.send({
            status: "success",
            result: result,
        });
    });
};