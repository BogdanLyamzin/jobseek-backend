const Cv = require('../../../models/cv/cv');
const Vacancy = require('../../../models/Vacancy');

module.exports = (app, passport) => {
  app.post("/sentCvs", passport, async (req, res) => {

    try {
      const {sent} = await Cv.findById(req.body.cvId);
      const {received} = await Vacancy.findById(req.body.vacancyId);
      sent.push({cvId: req.body.cvId, vacancyId: req.body.vacancyId, status: false});
      received.push({cvId: req.body.cvId, vacancyId: req.body.vacancyId, status: false});
      await Vacancy.findByIdAndUpdate(req.body.vacancyId, {received: received});
      const result = await Cv.findByIdAndUpdate(req.body.cvId, {sent: sent});

      res.send({
        status: "Success",
        result: result,
      });
    } catch (err) {
      res.send({
        status: "Error",
        message: err,
      });
    }
  });
};
