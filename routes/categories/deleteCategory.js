const Category = require("../../models/AdminPage/Category");

module.exports = (app) => {
    app.delete('/categories/:id', (req, res) => {
        Category.findByIdAndDelete(req.params.id, (err) => {
            if (err) res.send({status: "error"});
            
            else res.send({
                status: "Success",
            });
        });
    });
};