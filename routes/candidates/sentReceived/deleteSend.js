const Cv = require('../../../models/cv/cv');
const Vacancy = require('../../../models/Vacancy');

module.exports = (app, passport) => {
  app.delete("/sentCvs", passport, async (req, res) => {
    try {
      const { cvId, vacancyId } = req.body;
      const { sent } = await Cv.findById(cvId);
      const { received } = await Vacancy.findById(vacancyId);

      const indexSent = sent.findIndex(e => e.cvId === cvId && e.vacancyId === vacancyId);
      const indexReceived = received.findIndex(e => e.cvId === cvId && e.vacancyId === vacancyId);

      sent.splice(indexSent, 1);
      received.splice(indexReceived, 1);

      await Vacancy.findByIdAndUpdate(vacancyId, { received });
      const result = await Cv.findByIdAndUpdate(cvId, { sent }, {new: true});

      res.send({
        status: "Success",
        result,
      });
    } catch (err) {
      res.send({
        status: "Error",
        message: err,
      });
    }
  });
};
