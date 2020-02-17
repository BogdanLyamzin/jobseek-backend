const Candidate = require ('../../models/candidate');


module.exports = (app) => {
    app.post("/candidates", async (req, res) => {

        const candidate = new Candidate({
            name: req.body.name,
            avatar: req.body.avatar ? req.body.avatar : "avatar",
            lastName: req.body.lastName,
            city: req.body.city,
            country: req.body.country,
            email: req.body.email,
            phone: req.body.phone,
            repositoryLink: req.body.repositoryLink,
            facebookLink: req.body.facebookLink,
            linkedinLink: req.body.linkedinLink,
            resumeJobs: req.body.resumeJobs,
            levelEng: req.body.levelEng,
            isActive: req.body.isActive,
            date: req.body.date
        });

        try {
            const result = await candidate.save();
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
