const Category = require("../../models/AdminPage/Category");

module.exports = (app) => {
    app.get('/categories', (req, res) => {
        Category.find({}, (err, allCategories) => {
            if (err) res.send({
                status: "error",
                message: 'Не удалось почулить все категории'
            });

            else res.send({status: "Success", result: allCategories});
        });
    });
};