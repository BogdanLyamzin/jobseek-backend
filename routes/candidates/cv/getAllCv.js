const Cv = require ('../../../models/cv/cv');

module.exports = (app) => {
    app.get("/cvs", async (req, res) => {
        console.log(req.query)
        try {
            const result = await Cv.find(req.query);
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



