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
    });
};
