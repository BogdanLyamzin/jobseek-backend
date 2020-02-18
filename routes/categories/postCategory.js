const Category = require("../../models/AdminPage/Category");

module.exports = (app) => {
    app.post('/categories', async (req, res) => {

        const category = new Category({
            categoryName: req.body.categoryName,
            parentId: req.body.parentId,
        });

        try {
            const result = await category.save();
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