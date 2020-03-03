const Candidate = require ('../../models/candidate');


module.exports = (app, passport) => {
    app.get("/candidates", passport, async (req, res) => {

        try {
            const result = await Candidate.find(req.query);
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




