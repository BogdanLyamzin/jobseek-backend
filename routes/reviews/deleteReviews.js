const Review = require("../../models/Review");


module.exports = (app, passport) => {
    app.delete('/reviews/:id', passport, async (req, res) => {
        
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
    });
};
