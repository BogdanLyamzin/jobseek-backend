const Candidate = require ('../../models/candidate');
const upload = require("../../utils/uploadPhoto");

module.exports = (app, passport) => {
    app.put("/candidates/:id", passport, upload.single("avatar"), async (req, res) => {
        if (req.file) {
            req.body.avatar = `http://${req.headers.host}/image/${req.file.filename}`;
        }

        try {
            const result = await Candidate.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.send({
                status: "Success",
                result: result,
            });
        } catch (err) {
            res.send({
                status: "Error",
                message: err,
            });
        }
    });

};

