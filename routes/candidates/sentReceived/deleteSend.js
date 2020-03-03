const Cv = require('../../../models/cv/cv');
const Vacancy = require('../../../models/Vacancy');

module.exports = (app, passport) => {
  app.delete("/sentCvs", passport, async (req, res) => {

    try {
      const {sent} = await Cv.findById(req.body.cvId);
      const {received} = await Vacancy.findById(req.body.vacancyId);
      const indexSent = sent.findIndex(e => 
        e.cvId === req.body.cvId && e.vacancyId ===req.body.vacancyId
      );
      const indexReceived = received.findIndex(e => 
        e.cvId === req.body.cvId && e.vacancyId ===req.body.vacancyId
      );

      sent.splice(indexSent, 1);
      received.splice(indexReceived, 1);

      await Vacancy.findByIdAndUpdate(req.body.vacancyId, {received: received});
      const result = await Cv.findByIdAndUpdate(req.body.cvId, {sent: sent });

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
