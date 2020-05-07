const HR = require("../../models/HR");

module.exports = (app, passport) => {
    app.delete('/hr/:id', passport, async (req, res) => {
        try {
            const result = await HR.findById(req.params.id);
			if (result) {
				await HR.findByIdAndDelete(req.params.id);
				res.send({
					status: 'Success',
					result: `HR witn name "${result.name}" is successfully deletes`,
				});
			} else {
				res.status(400).json({
					status: 'Error',
					message: `HR with id ${req.params.id} is not found.`,
				});
			}
        } catch(err) {
            res.send({
                status: "Error",
                message: err,
            });           
        }           
    });
};