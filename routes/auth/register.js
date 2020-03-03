const { REGISTERED, MAIL_EXIST } = require('../../utils/validator/type');
const User = require('../../models/User')
const bcrypt = require('bcrypt')
const regMail = require('../../emails/registration')
const transporter = require('../../configs/sendMail')
const validateRegisterInputs = require('../../utils/validator/register')

module.exports = app => {
    app.post('/register', async (req, res) => {
        const{errors, isValid} = validateRegisterInputs(req.body)
        
        if(!isValid) {
            return res.json({errors});
        }
    
        const emailExist = await User.findOne({email: req.body.email})
        if(emailExist) {
            errors.status = "error"
            errors.message = MAIL_EXIST
            return res.send({errors})
        } 
    
        const{email, password, type} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
    
        const user = await new User({
            email,
            password: hashedPassword,
            type
        })
        try{
            
            await user.save()
            await transporter.sendMail(regMail(email))
            return res.send({status: "success", message: REGISTERED})
        } catch(error) {
            res.status(401).json({status:"error", message: "Щось пішло не так. Повторіть пізніше"})
        }   
        
    })
}
