const HR = require("../../models/HR");
const nodemailer = require('nodemailer');
const passwordGenerator = require("password-generator");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'krozhkov09@gmail.com',
        pass: 'Danit2019'
    }
});


module.exports = (app, passport) => {
    app.post('/hr', passport, async (req, res) => {
        const hr = new HR({
            name: req.body.name,
            lastName: req.body.lastName,
            phone: req.body.phone,
            email: req.body.email,
            companyId: req.body.companyId,
            active: req.body.active,            
            avatar: req.body.avatar ? req.body.avatar : "avatar",
            date: req.body.date            
        });
        try {
            const result = await hr.save();
if(result) {
    const password = passwordGenerator(12,false)
    await transporter.sendMail({
        from: 'jobseek', // sender address
        to: req.body.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world!", // plain text body
        html: "<b>Hello world? Your password : </b>" +password// html body
    });
}
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