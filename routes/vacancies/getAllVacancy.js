const Vacancy = require("../../models/Vacancy");

module.exports = (app) => {
    app.get('/vacancies', async (req, res) => {
        
        try {
            const result = await Vacancy.find(req.query);
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
        const vacancyList = await Vacancy.find(req.query, (err, vacancy) => {
            // mongoose.disconnect();
            if (err) return res.send({
                status: "error",
                result: err,
            });
            return vacancy;
        });

        res.send({
            status: "success",
            result: vacancyList,
        });
        */
    });
};
