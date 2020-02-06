const HR = require("../../models/HR");

module.exports = (app) => {
    app.delete('/hr/:id', async (req, res) => {
        
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
        /*
        const deleteHR = await HR.findByIdAndDelete(req.params.id, (err, deleteData) => {
            if (err) return res.send({
                status: "error",
                result: err,
            });
            return deleteData;
        });

        res.send({
            status: "success",
            result: deleteHR,
        });*/
    });
};