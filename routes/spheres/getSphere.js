const Sphere = require("../../models/AdminPage/Sphere");

module.exports = (app) => {
    app.get('/spheres', async (req, res) => {
        try {
            const result = await Sphere.find(req.query);
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