const Candidate = require ('../../models/candidate');


module.exports = (app) => {
    app.get("/candidates/:id", async (req, res) => {

        try {
            const result = await Candidate.findById(req.params.id);
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
