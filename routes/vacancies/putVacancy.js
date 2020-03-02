const Vacancy = require("../../models/Vacancy");

module.exports = app => {
  app.put("/vacancies/:id", async (req, res) => {
    if(req.body.active) {
      req.body.date = Date.now();
    }

    try {
      const result = await Vacancy.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
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
