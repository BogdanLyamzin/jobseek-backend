const HR = require("../../models/HR");
const upload = require("../../utils/uploadPhoto");

module.exports = (app, passport) => {
  app.put("/hr/:id", passport, upload.single("avatar"), async (req, res) => {
    if (req.file) {
      req.body.avatar = `http://${req.headers.host}/image/${req.file.filename}`;
    }

    try {
      const hr = await HR.findById(req.params.id);
      if(hr) {
        const result = await HR.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send({
          status: "Success",
          result,
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
