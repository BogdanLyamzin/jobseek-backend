const Review = require('../../models/Review');

module.exports = (app, passport) => {
    app.get('/reviews', passport,  async (req, res) => {
        
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
    });
};
