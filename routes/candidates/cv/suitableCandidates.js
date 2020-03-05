const Cv = require("../../../models/cv/cv");
const Vacancy = require("../../../models/Vacancy");

module.exports = (app, passport) => {
  app.get("/suitableCandidates/:id", passport, async (req, res) => {
    try {
      const { skills } = await Vacancy.findById(req.params.id);
      const skillsCount = skills.length;

      try {
        const allCvs = await Cv.find({});

        const suitableCandidates = allCvs.filter(({ cvSkill, activeCV }) => {
          let suitableSkillsCount = 0;
          cvSkill.forEach(({ id, experience }) => {
            if (
              skills.find(
                skill => skill.id === id && skill.experience <= experience
              )
            ) {
              suitableSkillsCount++;
            }
          });
          return suitableSkillsCount / skillsCount >= 0.7 && activeCV;
        });

        res.send({
          status: "Success",
          result: suitableCandidates
        });
      } catch (err) {
        res.send({
          status: "Error",
          message: err
        });
      }
    } catch (err) {
      res.send({
        status: "Error",
        message: err
      });
    }
  });
};
