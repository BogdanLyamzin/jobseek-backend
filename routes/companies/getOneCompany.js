const Company = require("../../models/Company");

module.exports = (app) => {
    app.get("/companies/:id", async (req, res) => {
        
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