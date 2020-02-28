const Cv = require ('../../../models/cv/cv');

module.exports = (app, passport) => {
    app.post("/cvs", passport, async (req, res) => {

        const cv = new Cv({
            userId: req.body.userId,
            activeCV: req.body.activeCV,
            cvSkill: req.body.cvSkill [
                    {
                        id: "",
                        experience: ""
                    }
                    ],
            date: req.body.date
        });

        try {
            const result = await cv.save();
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


