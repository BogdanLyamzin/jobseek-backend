const Company = require("../../models/Company");

module.exports = (app) => {
    app.delete("/companies/:id", async (req, res) => {
        try {
            const result = await Company.remove({_id: req.params.id});
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
        Company.remove({_id: req.params.id}, company, (err, result ) => {
            if (err) {
                res.send({status:"Error", message: err});
            } else {
                res.send(req.body);
            }
        });
        */
    });
};