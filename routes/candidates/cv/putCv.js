const Cv = require ('../../../models/cv/cv');

module.exports = (app) => {
    app.put("/candidates/cvs/:id", async (req, res) => {

        try {
            const result = await Cv.findByIdAndUpdate(req.params.id, req.body);
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
