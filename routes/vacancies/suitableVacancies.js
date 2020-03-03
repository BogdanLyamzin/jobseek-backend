const Cv = require("../../models/cv/cv");
const Vacancy = require("../../models/Vacancy");

module.exports = (app, passport) => {
    app.get("/suitableVacancies/:id", passport, async (req, res) => {
        try {
            const { cvSkill } = await Cv.findById(req.params.id);
            const skillsCount = cvSkill.length;

            try {
                const allVacancy = await Vacancy.find({});

                const suitableVacancy = allVacancy.filter(({ skills, active }) => {
                    let suitableSkillsCount = 0;
                    skills.forEach(({ id, experience }) => {
                        if (
                            cvSkill.find(
                                skill => skill.id === id && skill.experience <= experience
                            )
                        ) {
                            suitableSkillsCount++;
                        }
                    });
                    return suitableSkillsCount / skillsCount >= 0.7 && active;
                });

                res.send({
                    status: "Success",
                    result: suitableVacancy
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
