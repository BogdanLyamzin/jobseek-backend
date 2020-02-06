const Vacancy = require("../../models/Vacancy");

module.exports = (app) => {
    app.put('/vacancies/:id', async (req, res) => {
        
        try {
            const result = await Vacancy.findByIdAndUpdate(req.params.id, req.body);
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
