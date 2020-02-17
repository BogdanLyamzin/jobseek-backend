const Candidate = require ('../../models/candidate');

module.exports = (app) => {
    app.delete("/candidates/:id", async (req, res) => {

        try {
            const result = await Candidate.findByIdAndDelete(req.params.id);
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
