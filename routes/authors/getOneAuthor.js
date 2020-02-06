const Author = require("../../models/Author");

module.exports = (app) => {
    app.get('/authors/:id', async (req, res) => {
        try {
            const author = await Author.findById(req.params.id);
            res.send({
                status: "Success",
                result: author,
            });                
        } catch(err) {
            res.send({
                status: "Error",
                message: err,
            });           
        }        
    });
};