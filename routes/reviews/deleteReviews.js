const Review = require("../../models/Review");

module.exports = (app, passport) => {
  app.delete("/reviews/:id", passport, async (req, res) => {
    try {
      const result = await Review.findById(req.params.id);
      if (result) {
        await Review.findByIdAndDelete(req.params.id);
        res.send({
          status: "Success",
          message: `Review is successfully deletes`,
        });
      } else {
        res.send({
          status: "Error",
          message: `Review with id ${req.params.id} is not found.`,
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
