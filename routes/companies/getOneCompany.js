const Company = require("../../models/Company");

module.exports = (app, passport) => {
    app.get("/companies/:id", passport, async (req, res) => {
        
        try {
            const result = await Company.findById(req.params.id);
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