const Cv = require ('../../../models/cv/cv');

module.exports = (app, passport) => {
    app.get("/cvs", passport, async (req, res) => {

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



