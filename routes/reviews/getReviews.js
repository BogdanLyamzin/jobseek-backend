const Review = require('../../models/Review');


module.exports = (app) => {
    app.get('/reviews',  async (req, res) => {
        
        try {
            const result = await Review.find(req.query);
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
     const reviewsList = Review.find(req.query, (err, review) => {
         // mongoose.disconnect();
         if (err) return res.send({
             status: "error",
             result: err,
         });
         return review;
     });
        res.send({
            status: "success",
            result: reviewsList,
        });
    });
    */
    });
};
