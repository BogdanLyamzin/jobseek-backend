const Cv = require('../../../models/cv/cv');
const Vacancy = require('../../../models/Vacancy');

module.exports = (app, passport) => {
  app.post("/sentCvs", passport, async (req, res) => {
    try {
      const { cvId, vacancyId } = req.body;
      const { sent } = await Cv.findById(cvId);
      const { received } = await Vacancy.findById(vacancyId);

      sent.push({ cvId, vacancyId, status: false });
      received.push({ cvId, vacancyId, status: false });

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
