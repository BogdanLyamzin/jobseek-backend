const Report = require("../../../models/Report");
const queryCreator = require('../../utils/queryCreator');

module.exports = (app, passport) => {
  app.post("/reports", passport, async (req, res) => {
    try {
      const report = new Report(queryCreator(req.body));
      const result = await report.save();
      res.send({
        status: "Success",
        result: result
      });
    } catch (err) {
      res.send({
        status: "Error",
        message: err
      });
    }
  });
};
