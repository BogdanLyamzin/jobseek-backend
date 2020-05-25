const bcrypt = require("bcrypt");
const passwordGenerator = require("password-generator");

const HR = require("../../models/HR");
const User = require("../../models/User");
const regHr = require("../../emails/registerHr");
const transporter = require("../../configs/sendMail");
const queryCreator = require("../../utils/queryCreator");

module.exports = (app, passport) => {
  app.post("/hr", passport, async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.json({
          status: "Error",
          message: "HR з такою поштою вже зареєстровано",
        });
      }

      const password = passwordGenerator(12, false);
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
        type: "hr",
      });

      await newUser.save();
      const existUser = await User.findOne({ email: req.body.email });
      const hr = new HR({
        userId: existUser._id,
        ...queryCreator(req.body),
      });

      const result = await hr.save();
      if (result) {
        await transporter.sendMail(regHr(req.body.email, password));
        res.send({
          status: "Success",
          result,
        });
      }
    } catch (err) {
      res.send({
        status: "Error",
        message: `Error happened on server: "${err}" `,
      });
    }
  });
};
