const Category = require("../../models/AdminPage/Category");

module.exports = (app) => {
    app.get('/categories/:id', (req, res) => {
        Category.findById(req.params.id, (err, oneCategory) => {
            if (err) res.send({
                status: "error",
                message: 'Не удаллось получить категорию'
            });
            
            else res.send({
                status: "Success",
                result: oneCategory,
            });
        });
    });
};