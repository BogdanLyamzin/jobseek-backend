const Company = require("../../models/Company");

module.exports = (app, passport) => {
    app.get("/companies", passport, async (req, res) => {
        
        try {
            const result = await Company.find(req.query);
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
