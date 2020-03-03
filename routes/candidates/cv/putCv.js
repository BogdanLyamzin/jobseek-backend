const Cv = require ('../../../models/cv/cv');

module.exports = (app, passport) => {
    app.put("/cvs/:id", passport, async (req, res) => {
        try {
            const result = await Cv.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            res.send({
                status: "Success",
                result: result
            });
        } catch (err) {
            res.send({
                status: "Error",
                message: err
            });
        }
    });
};
