const HR = require("../../models/HR");

module.exports = (app, passport) => {
    app.delete('/hr/:id', passport, async (req, res) => {
        
        try {
            const result = await HR.findByIdAndDelete(req.params.id);
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