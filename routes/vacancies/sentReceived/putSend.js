const Cv = require("../../../models/cv/cv");
const Vacancy = require("../../../models/Vacancy");

module.exports = (app, passport) => {
  app.put("/sentVacancies", passport, async (req, res) => {
    try {
      const { cvId, status, vacancyId } = req.body;
      const { received } = await Cv.findById(cvId);
      const { sent } = await Vacancy.findById(vacancyId);

      const indexSent = sent.findIndex(e => e.cvId === cvId && e.vacancyId === vacancyId);
      const indexReceived = received.findIndex(e => e.cvId === cvId && e.vacancyId === vacancyId);

      sent.splice(indexSent, 1, { cvId, vacancyId, status, date: Date.now() });
      received.splice(indexReceived, 1, { cvId, vacancyId, status, date: Date.now() });

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
