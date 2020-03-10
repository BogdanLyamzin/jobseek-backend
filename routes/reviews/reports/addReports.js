const Report = require("../../../models/Report");

module.exports = (app, passport) => {
  app.post("/reports", passport, async (req, res) => {
    const report = new Report({
      name: req.body.name,
      reviewId: req.body.reviewId,
      reviewText: req.body.reviewText,
      date: req.body.date
    });

    try {
      const result = await report.save();
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