const Category = require("../../models/AdminPage/Category");

module.exports = (app, passport) => {
    app.delete('/categories/:id', passport, async (req, res) => {

        try {
            const result = await Category.findByIdAndDelete(req.params.id);
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