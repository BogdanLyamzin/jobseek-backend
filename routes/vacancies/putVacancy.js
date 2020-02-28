const Vacancy = require("../../models/Vacancy");

module.exports = (app, passport) => {
  app.put("/vacancies/:id", passport, async (req, res) => {
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
    /*
        const updateVacancy = await Vacancy.findByIdAndUpdate(req.params.id, req.body, (err, update) => {
            // mongoose.disconnect();
            if (err) return res.send({
                status: "error",
                result: err,
            });
            return update;
        });

        res.send({
            status: "success",
            result: updateVacancy,
        });
        */
  });
};
