const Vacancy = require("../../models/Vacancy");
const queryCreator = require('../../utils/queryCreator');

module.exports = (app, passport) => {
  app.post("/vacancies", passport, async (req, res) => {
    try {
      const vacancy = new Vacancy({
        ...queryCreator(req.body),
        sent: req.body.sent ? req.body.sent : [],
        received: req.body.received ? req.body.received : [],
      });
      const result = await vacancy.save();
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
