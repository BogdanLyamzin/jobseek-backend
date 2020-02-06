const HR = require("../../models/HR");
const upload = require("../../utils/uploadPhoto");

module.exports = (app) => {
    app.put('/hr/:id', (req, res) => {
        upload(req, res, async (err) => {
            if (err) {
                res.sendStatus(500)
            }

            req.body.avatar = `http://${req.headers.host}/image/${req.file.filename}`;

            try {
                const result = await HR.findByIdAndUpdate(req.params.id, req.body);
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
            const updateHR = await HR.findByIdAndUpdate(req.params.id, req.body, (err, update) => {
                if (err) return res.send({
                    status: "error",
                    result: err,
                });
                return update;
            });

            res.send({
                status: "success",
                result: updateHR,
            });
            */
        });
    });
};
