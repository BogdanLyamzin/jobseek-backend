const Review = require("../../models/Review");


module.exports = (app) => {
    app.delete('/reviews/:id', async (req, res) => {
        
        try {
            const result = await Review.findByIdAndDelete(req.params.id);
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
       const deleteReview = await Review.findByIdAndDelete(req.params.id, function (err, deleteReview) {
            // mongoose.disconnect();
            if (err) return res.send({
                status: "error",
                result: err,
            })
           return deleteReview;
       });
        res.send({
            status: "success",
            result: deleteReview,
        });
        */
    });
};
