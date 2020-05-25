const Vacancy = require("../../models/Vacancy");

module.exports = (app, passport) => {
  app.get("/vacancies/:id", passport, async (req, res) => {
    try {
      const result = await Vacancy.findById(req.params.id);
      if (result) {
        res.send({
          status: "Success",
          result,
        });
      } else {
        res.send({
          status: "Error",
          message: `Vacancy with id ${req.params.id} is not found.`,
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
