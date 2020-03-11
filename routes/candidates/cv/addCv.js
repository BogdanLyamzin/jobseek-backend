const Cv = require("../../../models/cv/cv");

module.exports = (app, passport) => {
  app.post("/cvs", passport, async (req, res) => {
    const cv = new Cv({
      candidateId: req.body.userId,
      sphere: req.body.sphere,
      profession: req.body.profession,
      category: req.body.category,
      active: req.body.active,
      salary: req.body.salary,
      country: req.body.country,
      city: req.body.city,
      skills: req.body.skills,
      englishLevel: req.body.englishLevel,
      description: req.body.description,
      sent: req.body.sent ? req.body.sent : [],
      received: req.body.received ? req.body.received : [],
      vacancyName: req.body.vacancyName,
      date: req.body.date
    });

    try {
      const result = await cv.save();
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
