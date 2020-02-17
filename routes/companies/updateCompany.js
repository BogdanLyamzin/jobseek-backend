const Company = require("../../models/Company");

module.exports = (app) => {
    app.put("/companies/:id", async (req, res) => {
            try {
                const result = await Company.findByIdAndUpdate(req.params.id, req.body);
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
