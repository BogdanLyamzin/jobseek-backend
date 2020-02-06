const Book = require("../../models/Book");

module.exports = (app) => {
    app.post('/books', async (req, res) => {
        const book = new Book({
            name: req.body.name,
            authorId: req.body.authorId
        });

        try {
            console.log(book)
            const result = await book.save();
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
