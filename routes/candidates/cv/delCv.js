const Cv = require ('../../../models/cv/cv');

module.exports = (app, passport) => {
    app.delete("/cvs/:id", passport, async (req, res) => {

        try {
            const result = await Cv.findByIdAndDelete(req.params.id);
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
