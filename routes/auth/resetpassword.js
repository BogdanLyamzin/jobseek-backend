const User = require('../../models/User')

module.exports = app => {
    app.get('/resetpassword/:token', async (req, res) => {
        try{
            if(!req.params.token) {
                return res.redirect('/login')
            }
    
            const user = await User.findOne({
                resetToken: req.params.token,
                resetTokenExp: {$gt: Date.now()}
            })
            if(!user) {
                return res.send({status: "error", message: "Час очікування вийшов"})
            }
            
            res.send(user._id)
            
    
    
        } catch(error) {
            console.log(error)
        }
    })
}
