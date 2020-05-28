const Vacancy = require("../../models/Vacancy");

module.exports = (app, passport) => {
  app.get("/vacancies", passport, async (req, res) => {
    try {
      const result = await Vacancy.find(req.query);
      res.send({
        status: "Success",
        result,
      });
    } catch (err) {
      res.send({
        status: "Error",
        message: `Error happened on server: "${err}" `,
      });
    }
  });
};
