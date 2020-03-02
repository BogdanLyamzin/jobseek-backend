const Cv = require("../../../models/cv/cv");

module.exports = app => {
  app.post("/cvs", async (req, res) => {
    const cv = new Cv({
      userId: req.body.userId,
      activeCV: req.body.activeCV,
      skills: req.body.skills,
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
