const Company = require("../../models/Company");

module.exports = (app, passport) => {
    app.get("/companies/:id", passport, async (req, res) => {
        
        try {
            const result = await Company.find({userId: req.params.id});
            if (result){
                res.send({
                    status: "Success",
                    result: result[0],
                });
            }
            else {
                res.send({
                    status: "Error",
                    result: "No such Company",
                });
            }
        } catch(err) {
            res.send({
                status: "Error",
                message: err,
            });           
        }         
    });
};