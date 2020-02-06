const Author = require("../../models/Author");

module.exports = (app) => {
    app.post('/authors', async (req, res) => {
        const author = new Author({
            name: req.body.name,
            lastName: req.body.lastName
        });

        try {
            const result = await author.save();
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
