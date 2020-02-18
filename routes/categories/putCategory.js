const Category = require("../../models/AdminPage/Category");

module.exports = (app) => {
    app.put('/categories/:id', async (req, res) => {
        try {
            const result = await Category.findByIdAndUpdate(req.params.id, req.body);
            res.send({
                status: "Success",
                result: result,
            });
        } catch (err) {
            res.send({
                status: "Error",
                message: err,
            });
        }
    });
};