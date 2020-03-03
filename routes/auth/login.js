const INVALID_LOG_PASS = require('../../utils/validator/type').INVALID_LOG_PASS
const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validateLoginInputs = require('../../utils/validator/login')


module.exports = app => {
    app.post('/login', async (req, res) => {
        const {errors, isValid} = validateLoginInputs(req.body)
    
        if(!isValid) {
            return res.json({errors})
        }
    
        const user = await User.findOne({email: req.body.email})
        if(!user){
            errors.status = "error"
            errors.message = INVALID_LOG_PASS
            return res.json({errors})
        } 
    
       try{
        if(await bcrypt.compare(req.body.password, user.password)) {
    
            const token = jwt.sign({_id: user. _id}, process.env.TOKEN_SECRET)
            return res.json({"status": "success", token: `bearer ${token}`, type: user.type})
            
        }
        errors.status = "error"
        errors.message = INVALID_LOG_PASS
        return res.json({errors})
        
       } catch(error) {
           res.json(error)
       }
    })
    
}
