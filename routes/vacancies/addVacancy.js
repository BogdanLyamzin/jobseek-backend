const Vacancy = require("../../models/Vacancy");

module.exports = app => {
  app.post("/vacancies", async (req, res) => {
    const vacancy = new Vacancy({
      vacancyName: req.body.vacancyName,
      sphere: req.body.sphere,
      profession: req.body.profession,
      category: req.body.category,
      country: req.body.country,
      city: req.body.city,
      salary: req.body.salary,
      englishLevel: req.body.englishLevel,
      skills: req.body.skills,
      employmentType: req.body.employmentType,
      description: req.body.description,
      active: req.body.active,
      companyId: req.body.companyId,
      hrId: req.body.hrId,
      date: req.body.date
    });

    try {
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
