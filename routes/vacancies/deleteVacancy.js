const Vacancy = require("../../models/Vacancy");

module.exports = (app, passport) => {
    app.delete('/vacancies/:id', passport, async (req, res) => {
        
        try {
            const result = await Vacancy.findByIdAndDelete(req.params.id);
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
