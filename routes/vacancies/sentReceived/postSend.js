const Cv = require('../../../models/cv/cv');
const Vacancy = require('../../../models/Vacancy');

module.exports = (app, passport) => {
  app.post("/sentVacancies", passport, async (req, res) => {
    try {
      const { cvId, vacancyId } = req.body
      const { received } = await Cv.findById(cvId);
      const { sent } = await Vacancy.findById(vacancyId);

      sent.push({ cvId, vacancyId, status: false });
      received.push({ cvId, vacancyId, status: false });

      await Cv.findByIdAndUpdate(cvId, { received });
      const result = await Vacancy.findByIdAndUpdate(vacancyId, { sent }, { new: true });

      res.send({
        status: "Success",
        result,
      });
    } catch (err) {
      res.send({
        status: "Error",
        message: `Error happened on server: "${err}" `,
      });
    }
  });
};
