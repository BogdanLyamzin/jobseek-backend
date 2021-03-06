const Candidate = require ('../../models/candidate');


module.exports = (app, passport) => {
    app.get("/candidates/:id", passport, async (req, res) => {

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
