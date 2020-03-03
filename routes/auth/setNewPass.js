const {PASS_CHANGED} = require( '../../utils/validator/type');
const User = require('../../models/User');
const bcrypt = require('bcrypt')
const validatePassInputs = require('../../utils/validator/changePass')

module.exports = app => {
    app.post('/setpassword', async (req, res) => {

        const{errors, isValid} = validatePassInputs(req.body)
        
        if(!isValid) {
            return res.json(errors);
        }
    
        try{
            const user = await User.findOne({_id: req.body.id})
            if(!user) {
                return res.send({status: "error", message: "Це посилання більше не дійсне."})
            }
    
            user.password = await bcrypt.hash(req.body.password, 10)
            user.resetToken = undefined
            user.resetTokenExp = undefined
            await user.save()
            res.send({status: "success", message: PASS_CHANGED})
    
        } catch(err) {
            console.log(err)
        }
    })
}