const Category = require("../../models/AdminPage/Category");

module.exports = (app, passport) => {
    app.get('/categories', passport, async (req, res) => {
        try {
            const result = await Category.find(req.query);
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