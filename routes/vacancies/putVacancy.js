const Vacancy = require("../../models/Vacancy");

module.exports = (app, passport) => {
  app.put("/vacancies/:id", passport, async (req, res) => {
    if (req.body.active) {
      req.body.date = Date.now();
    }

    try {
      const vacancy = await Vacancy.findById(req.params.id);
      if (vacancy) {
        const result = await Vacancy.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
