const Review = require("../../models/Review");

module.exports = (app, passport) => {
    app.post('/reviews', passport, async (req, res) => {
        const review = new Review({
            reviewTxt: req.body.review,
            companyId: req.body.companyId,
            userId: req.body.userId,
            time: Date.now(),
            mark: req.body.mark
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
