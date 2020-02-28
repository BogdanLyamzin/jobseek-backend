const HR = require("../../models/HR");

module.exports = (app, passport) => {
    app.get('/hr', passport, async (req, res) => {
        
        try {
            const result = await HR.find(req.query);
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