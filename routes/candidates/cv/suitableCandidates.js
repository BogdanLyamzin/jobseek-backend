const Cv = require ('../../../models/cv/cv');
const Vacancy = require("../../../models/Vacancy");

module.exports = (app) => {
    app.get("/suitableCandidates/:id", async (req, res) => {

        try {
            const {skills} = await Vacancy.findById(req.params.id);
            const skillsCount = skills.length;

            try {
                const allCvs = await Cv.find({});

               const suitableCandidates = allCvs.filter(({cvSkill}) => {
                   let suitableSkillsCount = 0;
                    cvSkill.forEach(({id, experience}) => {
                        if(skills.find(skill => (skill.id === id && skill.experience <= experience))) {
                            suitableSkillsCount++;
                        }
                    });
                   return (suitableSkillsCount / skillsCount >= 0.7);
                });

                res.send({
                    status: "Success",
                    result: suitableCandidates,
                });
            }
            catch(err) {
                res.send({
                    status: "Error",
                    message: err,
                });
            }

        } catch(err) {
            res.send({
                status: "Error",
                message: err,
            });
        }


    });
};



