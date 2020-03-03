const Category = require("../../models/AdminPage/Category");

module.exports = (app, passport) => {
    app.get('/categories/:id', passport, async (req, res) => {
        const result = await Category.findById(req.params.id, (err, ctg) => {
            // mongoose.disconnect();
            if (err) return res.send({
                status: "error",
                result: err,
            });
            return ctg;
        });

        res.send({
            status: "success",
            result: result,
        });

    });
};