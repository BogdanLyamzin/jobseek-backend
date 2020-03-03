const Review = require("../../models/Review");

module.exports = (app, passport) => {
    app.put('/reviews/:id', passport, async (req, res) => {
        
        try {
            const result = await Review.findByIdAndUpdate(req.params.id, req.body, {new: true});
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
