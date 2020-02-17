const Category = require("../../models/AdminPage/Category");

module.exports = (app) => {
    app.put('/categories/:id', (req, res) => {
        Category.findByIdAndUpdate(req.params.id, req.body, (err, updateCategory) => {
            if (err) res.send({
                status: "error",
                message: 'Не удаллось изменить категорию'
            });
            
            else res.send({
                status: "Success",
                result: updateCategory,
            });
        });
    });
};