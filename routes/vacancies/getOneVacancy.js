const Vacancy = require("../../models/Vacancy");

module.exports = (app, passport) => {
    app.get('/vacancies/:id', passport, async (req, res) => {
        
        try {
            const result = await Vacancy.findById(req.params.id);
            res.send({
                status: "Success",
                result: result,
            });                
        } catch(err) {
            res.send({
                status: "Error",
                message: err,
            });           
        }         
    });
};
