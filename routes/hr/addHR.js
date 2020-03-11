const HR = require("../../models/HR");
const regHr = require("../../emails/registerHr");
const bcrypt = require('bcrypt');
const passwordGenerator = require("password-generator");
const User = require('../../models/User');
const transporter = require("../../configs/sendMail");

module.exports = (app, passport) => {
    app.post('/hr', passport, async (req, res) => {
        const user = await User.findOne({email: req.body.email});
        if (user) {
            return res.json({status: "Error", message: "User already exist"})
        }
        const password = passwordGenerator(12, false)
        console.log(password)
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            email: req.body.email,
            password: hashedPassword,
            type:'hr'
        });
        try {
            await newUser.save();
            const existUser = await User.findOne({email: req.body.email});
            const hr = new HR({
                userId: existUser._id,
                name: req.body.name,
                lastName: req.body.lastName,
                phone: req.body.phone,
                email: req.body.email,
                companyId: req.body.companyId,
                active: req.body.active,
                avatar: req.body.avatar ? req.body.avatar : "avatar",
                date: req.body.date,
            });

            const result = await hr.save();
            if (result) {

                await transporter.sendMail(regHr(req.body.email, password));
                res.send({
                    status: "Success",
                    result: result,
                });
            }
        } catch (err) {
            res.send({
                status: "Error",
                message: err,
            });
        }
    });
};