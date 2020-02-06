const Review = require("../../models/Review");

module.exports = (app) => {
    app.get('/reviews/:id', async (req, res) => {
        
        try {
            const result = await Review.findById(req.params.id);
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
        /*
       const oneReview = Review.findById(req.params.id, function (err, oneReview) {
            // mongoose.disconnect();
            if (err) return res.send({
                status: "error",
                result: err,
            });
       return oneReview;
       });
        res.send({
            status: "success",
            result: oneReview,
        });
        */
    });
};
