const Candidate = require ('../../models/candidate');
const upload = require("../../utils/uploadPhoto");

module.exports = (app) => {
    app.put("/candidates/:id", (req, res) => {
        upload(req, res, async (err) => {
            if (err) {
                res.sendStatus(500)
            }

            try {
                const result = await Candidate.findByIdAndUpdate(req.params.id, req.body);
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
    });
};

