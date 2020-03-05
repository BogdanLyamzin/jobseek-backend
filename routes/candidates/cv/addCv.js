const Cv = require("../../../models/cv/cv");

module.exports = (app, passport) => {
  app.post("/cvs", passport, async (req, res) => {
    const cv = new Cv({
      userId: req.body.userId,
      activeCV: req.body.activeCV,
      cvSkill: req.body.cvSkill,
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
