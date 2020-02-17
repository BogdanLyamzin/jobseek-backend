const Vacancy = require("../../models/Vacancy");

module.exports = (app) => {
    app.delete('/vacancies/:id', async (req, res) => {
        
        try {
            const result = Vacancy.findByIdAndDelete(req.params.id);
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
