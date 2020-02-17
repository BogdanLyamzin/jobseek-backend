const Company = require("../../models/Company");

module.exports = (app) => {
    app.post("/companies", async (req, res) => {
        const company = new Company({
            companyName: req.body.companyName,
            phone: req.body.phone,
            email: req.body.email,
            country: req.body.country,
            city: req.body.city,
            website: req.body.website,
            facebookLink: req.body.facebookLink,
            linkedinLink: req.body.linkedinLink,
            companyDescription: req.body.companyDescription
        });
        
        try {
            const result = await company.save();
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
