const Category = require("../../models/AdminPage/Category");

module.exports = (app) => {
    app.post('/categories', (req, res) => {
        const category = new Category({
            categoryName: req.body.categoryName,
            parentId: req.body.parentId,
        });
        category.save((err, data) => {
            if (err) res.send({
                status: "error",
                message: "Не удалось сохранить категорию"
            });
            
            else res.send({
                status: "Success",
                result: data,
            });
        });
    });
};