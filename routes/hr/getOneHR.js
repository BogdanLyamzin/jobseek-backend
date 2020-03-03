const HR = require("../../models/HR");

module.exports = (app, passport) => {
  app.get("/hr/:id", passport, async (req, res) => {
    try {
      const result = await HR.findById(req.params.id);
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
