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
        /*
        const deleteVacancy = await Vacancy.findByIdAndDelete(req.params.id, (err, deleteData) => {
            // mongoose.disconnect();
            if (err) return res.send({
                status: "error",
                result: err,
            });
            return deleteData;
        });

        res.send({
            status: "success",
            result: deleteVacancy,
        });
        */
    });
};
