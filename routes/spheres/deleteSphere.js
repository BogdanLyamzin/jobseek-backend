const Sphere = require("../../models/AdminPage/Sphere");

module.exports = (app, passport) => {
    app.delete('/spheres/:id', passport, async (req, res) => {

        try {
            const result = await Sphere.findByIdAndDelete(req.params.id);
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