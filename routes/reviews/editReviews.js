const Review = require("../../models/Review");

module.exports = (app) => {
    app.put('/reviews/:id', async (req, res) => {
        
        try {
            const result = await Review.findByIdAndUpdate(req.params.id, req.body);
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
        const updateReview = await  Review.findByIdAndUpdate(req.params.id, req.body, (err, update) => {
            // mongoose.disconnect();
            if (err) return res.send({
                status: "error",
                result: err,
            });
            return update;
        });

        res.send({
            status: "success",
            result: updateReview,
        });
        */
    });
};
