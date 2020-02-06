const Vacancy = require("../../models/Vacancy");

module.exports = (app) => {
    app.get('/vacancies/:id', async (req, res) => {
        
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
        /*
        const oneVacancy = await Vacancy.findById(req.params.id, (err, vacancy) => {
            // mongoose.disconnect();
            if (err) return res.send({
                status: "error",
                result: err,
            });
            return vacancy;
        });

        res.send({
            status: "success",
            result: oneVacancy,
        });
        */
    });
};
