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
        /*
        const company = {};
        for (let key in req.body) {
            company[key] = req.body[key]
        }
        Company.updateOne({_id: req.params.id}, company, (err, result) => {
            if (err) {
                res.send({status: "Error", message:err});
            } else {
                res.send(req.body);
            }
        });*/
    });
};
