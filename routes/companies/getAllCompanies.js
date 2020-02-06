const Company = require("../../models/Company");

module.exports = (app) => {
    app.get("/companies", async (req, res) => {
        
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
        /*
        if (req.query) {
            Company.find(req.query, (err, data) => {
                res.send({"Status": "Success", result: data});
            });
        } else {
            Company.find({}, (err, data) => {
                res.send({"Status": "Success", result: data});
            });
        }
        */
    });
};
