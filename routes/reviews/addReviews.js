const Review = require("../../models/Review");
const queryCreator = require('../../utils/queryCreator');

module.exports = (app, passport) => {
    app.post('/reviews', passport, async (req, res) => {
        try {
            const review = new Review(queryCreator(req.body));
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
