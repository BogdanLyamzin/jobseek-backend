const HR = require("../../models/HR");

module.exports = (app, passport) => {
  app.delete("/hr/:id", passport, async (req, res) => {
    try {
			const id = req.params.id;
			const result = await HR.findById(id);
			
      if (result) {
        await HR.findByIdAndDelete(id);
        res.send({
          status: "Success",
          result: `HR witn name "${result.name + " " + result.lastName}" is successfully deletes`,
        });
      } else {
        res.send({
          status: "Error",
          message: `HR with id ${id} is not found.`,
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
