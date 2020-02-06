const HR = require("../../models/HR");

module.exports = (app) => {
    app.get('/hr/:id', async (req, res) => {
        const oneHR = await HR.findById(req.params.id, (err, hr) => {
            // mongoose.disconnect();
            if (err) return res.send({
                status: "error",
                result: err,
            });
            return hr;
        });

        res.send({
            status: "success",
            result: oneHR,
        });
    });
};