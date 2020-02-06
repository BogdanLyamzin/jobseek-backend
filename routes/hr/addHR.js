const HR = require("../../models/HR");

module.exports = (app) => {
    app.post('/hr', async (req, res) => {
        const hr = new HR({
            name: req.body.name,
            lastName: req.body.lastName,
            phone: req.body.phone,
            email: req.body.email,
            companyId: req.body.companyId,
            active: req.body.active,
            date: req.body.date,
            avatar: req.body.avatar ? req.body.avatar : "avatar",
        });

        try {
            const result = await hr.save();
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