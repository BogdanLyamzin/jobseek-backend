const Report = require("../../../models/Report");

module.exports = (app, passport) => {
  app.get("/reports", passport, async (req, res) => {
    try {
      const result = await Report.find(req.query);
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
