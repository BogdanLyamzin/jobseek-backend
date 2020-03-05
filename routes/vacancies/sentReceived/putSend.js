const Cv = require('../../../models/cv/cv');
const Vacancy = require('../../../models/Vacancy');

module.exports = (app, passport) => {
  app.put("/sentVacancies", passport, async (req, res) => {

    try {
      const {received} = await Cv.findById(req.body.cvId);
      const {sent} = await Vacancy.findById(req.body.vacancyId);
      const indexSent = sent.findIndex(e => 
        e.cvId === req.body.cvId && e.vacancyId ===req.body.vacancyId
      );
      const indexReceived = received.findIndex(e => 
        e.cvId === req.body.cvId && e.vacancyId ===req.body.vacancyId
      );

      sent.splice(indexSent, 1, {
        cvId: req.body.cvId, 
        vacancyId: req.body.vacancyId, 
        status: req.body.status,
      });
      received.splice(indexReceived, 1, {
        cvId: req.body.cvId, 
        vacancyId: req.body.vacancyId, 
        status: req.body.status,
      });

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