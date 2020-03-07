const Report = require("../../../models/Report");

module.exports = (app, passport) => {
  app.delete("/reports/:id", passport, async (req, res) => {
    try {
      const result = await Report.findByIdAndDelete(req.params.id);
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
