const Cv = require ('../../../models/cv/cv');

module.exports = app => {
    app.put("/cvs/:id", async (req, res) => {
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
