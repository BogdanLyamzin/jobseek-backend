const Cv = require('../../../models/cv/cv');
const Vacancy = require('../../../models/Vacancy');

module.exports = (app, passport) => {
  app.post("/sentVacancies", passport, async (req, res) => {

    try {
      const {received} = await Cv.findById(req.body.cvId);
      const {sent} = await Vacancy.findById(req.body.vacancyId);
      sent.push({cvId: req.body.cvId, vacancyId: req.body.vacancyId, status: false});
      received.push({cvId: req.body.cvId, vacancyId: req.body.vacancyId, status: false});
      await Cv.findByIdAndUpdate(req.body.cvId, {received: received}, {new: true});
      const result = await Vacancy.findByIdAndUpdate(req.body.vacancyId, {sent: sent}, {new: true});

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
