const Profession = require("../../models/AdminPage/Profession");

module.exports = (app, passport) => {
    app.get('/professions/:id', passport, async (req, res) => {
        const result = await Profession.findById(req.params.id, (err, prf) => {
            // mongoose.disconnect();
            if (err) return res.send({
                status: "error",
                result: err,
            });
            return prf;
        });

        res.send({
            status: "success",
            result: result,
        });
    });
};