const Review = require("../../models/Review");

module.exports = (app, passport) => {
  app.get("/reviews/:id", passport, async (req, res) => {
    try {
      const result = await Review.findById(req.params.id);
      res.send({
        status: "Success",
        result,
      });
    } catch (err) {
      res.send({
        status: "Error",
        message: `Error happened on server: "${err}" `,
      });
    }
  });
};
