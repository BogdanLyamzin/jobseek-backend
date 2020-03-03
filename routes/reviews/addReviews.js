const Review = require("../../models/Review");

module.exports = (app, passport) => {
    app.post('/reviews', passport, async (req, res) => {
        const review = new Review({
            reviewTxt: req.body.reviewTxt,
            companyId: req.body.companyId,
            candidateName: req.body.candidateName,
            candidateId: req.body.candidateId,
            date: req.body.date,
        });

        try {
            const result = await review.save();
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
    })
};
