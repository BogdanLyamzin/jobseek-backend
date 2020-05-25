const Vacancy = require("../../models/Vacancy");

module.exports = (app, passport) => {
  app.delete("/vacancies/:id", passport, async (req, res) => {
    try {
      const result = await Vacancy.findById(req.params.id);
      if (result) {
        await Vacancy.findByIdAndDelete(req.params.id);
        res.send({
          status: "Success",
          result: `Vacancy witn name "${result.vacancyName}" is successfully deletes`,
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
