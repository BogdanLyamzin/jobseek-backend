const Company = require("../../models/Company");
const upload = require("../../utils/uploadPhoto");

module.exports = (app) => {
    app.post("/companies",  upload.single("avatar"), async (req, res) => {
        const company = new Company({
            companyName: req.body.companyName,
            phone: req.body.phone,
            email: req.body.email,
            country: req.body.country,
            city: req.body.city,
            date: req.body.date,
            website: req.body.website,
            facebookLink: req.body.facebookLink,
            linkedinLink: req.body.linkedinLink,
            avatar: req.body.avatar ? req.body.avatar : "avatar",
            description: req.body.description
        });
        if (req.file) {
            req.body.avatar = `http://${req.headers.host}/image/${req.file.filename}`;
        }
        try {
            const result = await company.save({new: true});
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
