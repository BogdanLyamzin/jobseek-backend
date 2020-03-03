const Category = require("../../models/AdminPage/Category");

module.exports = (app, passport) => {
    app.put('/categories/:id', passport, async (req, res) => {
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