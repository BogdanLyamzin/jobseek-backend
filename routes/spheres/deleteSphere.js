const Sphere = require("../../models/AdminPage/Sphere");


module.exports = (app) => {
    app.delete('/spheres/:id', (req, res) => {
        Sphere.findByIdAndDelete(req.params.id, (err) => {
            if (err) res.send({status: "error"});
            
            else res.send({
                status: "Success",
            });
        });
    });
};