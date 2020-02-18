const Profession = require("../../models/AdminPage/Profession");

module.exports = (app) => {
    app.post('/professions', async (req, res) => {
        const profession = new Profession({
            professionName: req.body.professionName,
            sphereId: req.body.sphereId,
        });
        try {
            const result = await profession.save();
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
